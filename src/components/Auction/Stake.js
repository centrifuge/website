import { Section } from '../MDXLayout/shortcodes';
import { encodeAddress } from '@polkadot/util-crypto';
import {
  Anchor,
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Grid,
  Image,
  Select,
  Spinner,
  Text,
  TextInput,
} from 'grommet';
import { CircleInformation } from 'grommet-icons';
import React, { useEffect, useMemo, useState } from 'react';
import queryString from 'query-string';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import { InsufficientFundsWarning } from './InsufficientFundsWarning';
import { UnexpectedError } from './UnexpectedError';
import { Prerequisites } from './Prerequisites';
import ksm_token_logo from '../../images/altair/ksm_token_logo.svg';
import { validEmailReg, validKSMReg, validReferralCode } from './regex';

const KUSAMA_GENESIS_HASH =
  '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe';

const AIR_REWARD = 400;
const REFERRAL_RATE = 1.05;
const EARLY_BIRD_RATE = 1.1;

const validateReferralCode = value => {
  if (value && (value.length !== 20 || !validReferralCode.test(value))) {
    return { status: 'error', message: 'Enter a valid referral code' };
  }
};

const validateEmailAddress = value => {
  if (value && !validEmailReg.test(value)) {
    return { status: 'error', message: 'Enter a valid email address' };
  }
};

const validateKsmAmount = value => {
  if (!value || !validKSMReg.test(value) || parseFloat(value) < 0.1) {
    return { status: 'error', message: 'Enter a valid amount of KSM' };
  }
};

export const Stake = ({
  api,
  estimatedAirRewards,
  isEarlybird,
  location,
  ksmAmount,
  selectedAccount,
  setEstimatedAirRewards,
  setHash,
  setIsFinalized,
  setKsmAmount,
  setSelectedAccount,
}) => {
  let polkadot;
  let isWeb3Injected;
  let web3Accounts;
  let web3Enable;
  let web3FromAddress;

  /*
   * have to do this since Gatsby tries to SSR but the @polkadot/extension-dapp library
   * tries to reference `window` which is not available on the server-side
   */
  try {
    polkadot = require('@polkadot/extension-dapp');
    isWeb3Injected = polkadot.isWeb3Injected;
    web3Accounts = polkadot.web3Accounts;
    web3Enable = polkadot.web3Enable;
    web3FromAddress = polkadot.web3FromAddress;
  } catch (polkadotError) {
    console.error(polkadotError);
  }

  const [checked, setChecked] = useState(false);
  const [error, setError] = useState();
  const [balanceLoading, setBalanceLoading] = useState(true);
  const [gasFee, setGasFee] = useState('');

  const [emailAddress, setEmailAddress] = useState('');
  const [accounts, setAccounts] = useState([]);
  const [freeBalance, setFreeBalance] = useState('');
  const [injector, setInjector] = useState();
  const [injectors, setInjectors] = useState([]);
  const [accountLoading, setAccountLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const referralCodeParam = queryString.parse(location.search).refer;

  const [referralCode, setReferralCode] = useState(referralCodeParam || '');

  useEffect(() => {
    setAccountLoading(true);
    (async () => {
      const injectors = await web3Enable('Altair Auction');

      const allAccounts = await web3Accounts();

      const kusamaAccounts = allAccounts.filter(
        account =>
          account.meta.genesisHash === KUSAMA_GENESIS_HASH ||
          account.meta.genesisHash === '' ||
          account.meta.genesisHash === null,
      );

      setInjectors(injectors);
      setAccounts(kusamaAccounts);

      setSelectedAccount(kusamaAccounts[0]);
      setAccountLoading(false);
    })();
  }, []);

  useEffect(
    () => {
      setBalanceLoading(true);
      (async () => {
        if (selectedAccount?.address && api) {
          const web3Injector = await web3FromAddress(selectedAccount?.address);

          const balances = await api.query.system.account(
            selectedAccount.address,
          );

          setInjector(web3Injector);
          setFreeBalance((balances.data.free.toNumber() / 10 ** 12).toString());
          setBalanceLoading(false);
        }
      })();
    },
    [api, selectedAccount],
  );

  const contribute = async () => {
    setIsSubmitting(true);

    const contributeTransaction = api.tx.crowdloan.contribute(
      2088,
      parseFloat(ksmAmount) * 10 ** 12,
      null,
    );

    if (referralCode) {
      try {
        const memo = api.createType('Bytes', referralCode);

        const memoTransaction = api.tx.crowdloan.addMemo(2088, memo);

        const batch = api.tx.utility.batchAll([
          contributeTransaction,
          memoTransaction,
        ]);

        await batch.signAndSend(
          selectedAccount.address,
          { signer: injector.signer },
          async status => {
            const error = status.events.filter(({ event }) =>
              api.events.system.ExtrinsicFailed.is(event),
            );

            if (status.status.isFinalized) {
              if (emailAddress) {
                await addToMailchimp(
                  emailAddress,
                  {},
                  'https://centrifuge.us17.list-manage.com/subscribe/post?u=27084e1d9e6f92398b5c7ce91&id=2c580b74e1',
                );
              }

              setHash(batch.hash.toHex());
              setIsFinalized(true);
            }

            if (status.status.dispatchError || error.length) {
              setError('error occurred');
              setIsFinalized(false);
              setIsSubmitting(false);
            }
          },
        );
      } catch (err) {
        setIsSubmitting(false);
        setError(err);
      }
    } else {
      try {
        await contributeTransaction.signAndSend(
          selectedAccount.address,
          { signer: injector.signer },
          async status => {
            const error = status.events.filter(({ event }) =>
              api.events.system.ExtrinsicFailed.is(event),
            );

            if (status.status.isFinalized) {
              if (emailAddress) {
                await addToMailchimp(
                  emailAddress,
                  {},
                  'https://centrifuge.us17.list-manage.com/subscribe/post?u=27084e1d9e6f92398b5c7ce91&id=2c580b74e1',
                );
              }

              setHash(contributeTransaction.hash.toHex());
              setIsFinalized(true);
            }

            if (status.status.dispatchError || error.length) {
              setError('error occurred');
              setIsSubmitting(false);
              setIsFinalized(false);
            }
          },
        );
      } catch (err) {
        setIsSubmitting(false);
        setError(err);
      }
    }
  };

  useEffect(
    () => {
      (async () => {
        if (api && selectedAccount) {
          const contributeTransaction = api.tx.crowdloan.contribute(
            2088,
            parseFloat(ksmAmount) * 10 ** 12,
            null,
          );

          const memo = api.createType('Bytes', '123456578901234567890');

          const memoTransaction = api.tx.crowdloan.addMemo(2088, memo);

          const gasFeeResponse = await api.tx.utility
            .batchAll([contributeTransaction, memoTransaction])
            .paymentInfo(selectedAccount?.address);

          setGasFee(
            (gasFeeResponse.partialFee.toNumber() / 10 ** 12).toString(),
          );
        }
      })();
    },
    [api, referralCode, selectedAccount?.address],
  );

  useEffect(
    () => {
      if (validateKsmAmount(ksmAmount)) {
        setEstimatedAirRewards(0);
      } else {
        const baseReward = ksmAmount * AIR_REWARD;

        const validReferralCode =
          referralCode && !validateReferralCode(referralCode);

        if (isEarlybird && validReferralCode) {
          setEstimatedAirRewards(baseReward * EARLY_BIRD_RATE * REFERRAL_RATE);
        } else if (isEarlybird) {
          setEstimatedAirRewards(baseReward * EARLY_BIRD_RATE);
        } else if (validReferralCode) {
          setEstimatedAirRewards(baseReward * REFERRAL_RATE);
        } else {
          setEstimatedAirRewards(baseReward);
        }
      }
    },
    [isEarlybird, ksmAmount, referralCode],
  );

  const hasExtension = useMemo(
    () => {
      const polkadotInjectors = injectors.filter(
        ({ name }) => name === 'polkadot-js',
      );

      if (polkadotInjectors.length) {
        return true;
      }

      return false;
    },
    [injectors],
  );

  const truncateAddress = address => {
    const encodedAddress = encodeAddress(address, 2);
    const firstFifteen = encodedAddress.slice(0, 15);
    const lastFifteen = encodedAddress.slice(-15);

    return `${firstFifteen}...${lastFifteen}`;
  };

  if (accountLoading || !polkadot) {
    return (
      <Section>
        <Box alignSelf="center">
          <Spinner size="medium" />
        </Box>
      </Section>
    );
  }

  if (!hasExtension || !accounts.length) {
    return <Prerequisites accounts={accounts} hasExtension={hasExtension} />;
  }

  return (
    <Section gap="medium" pad="medium" style={{ margin: 0 }}>
      <Box>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text size="xxlarge" weight={900}>
            Stake KSM
          </Text>
          <Anchor
            target="_blank"
            href="https://medium.com/altair-network/faq-altair-crowdloan-85b9d9abd235"
            primary
            label="FAQ"
            size="16px"
            weight={500}
          />
        </Box>
        <Text weight={600} style={{ marginTop: '36px' }}>
          <CircleInformation size="small" /> Note: Proxy accounts and multi
          signatures are not able to receive rewards
        </Text>
      </Box>
      {error && <UnexpectedError />}
      {isWeb3Injected && (
        <Box gap="medium" style={{ width: '575px' }}>
          <Form onSubmit={() => contribute()} validate="submit">
            <FormField label="Kusama account">
              <Select
                disabled={true}
                children={account => (
                  <Box pad="small" style={{ textAlign: 'left' }}>
                    <div>
                      {account.meta?.name} - {truncateAddress(account.address)}
                    </div>
                  </Box>
                )}
                options={accounts}
                onChange={({ option }) => setSelectedAccount(option)}
                valueKey={'address'}
                valueLabel={
                  selectedAccount?.address ? (
                    <Box pad="small" style={{ textAlign: 'left' }}>
                      <div>
                        {selectedAccount.meta?.name} -{' '}
                        {truncateAddress(selectedAccount.address)}
                      </div>
                    </Box>
                  ) : (
                    ''
                  )
                }
                value={`${selectedAccount.meta?.name} - ${
                  selectedAccount.address
                }`}
              />
            </FormField>
            <Box>
              <FormField
                name="kusama"
                htmlFor="kusama"
                label="Staking contribution (minimum of 0.1 KSM)"
                validate={value => validateKsmAmount(value)}
              >
                <TextInput
                  disabled={true}
                  icon={
                    <>
                      <Image src={ksm_token_logo} />
                      <span style={{ paddingLeft: '8px' }}>KSM</span>
                    </>
                  }
                  placeholder="0.1"
                  reverse
                  id="kusama"
                  name="kusama"
                  onChange={event => {
                    setError();
                    setKsmAmount(event.target.value);
                  }}
                  value={ksmAmount}
                />
              </FormField>
              <Text>
                <Grid columns={['90px', 'auto']}>
                  <Text>Your balance:</Text>
                  {balanceLoading ? (
                    <Spinner
                      style={{
                        height: '5px',
                        width: '5px',
                        padding: '7px',
                        marginTop: '3px',
                        marginLeft: '2px',
                      }}
                    />
                  ) : (
                    freeBalance
                  )}
                </Grid>
                {ksmAmount &&
                  ksmAmount >= parseFloat(freeBalance) - parseFloat(gasFee) && (
                    <InsufficientFundsWarning gasFee={gasFee} />
                  )}
              </Text>
              <Text
                size="20px"
                weight={900}
                alignSelf="center"
                style={{ paddingTop: '16px', paddingBottom: '16px' }}
              >
                Estimated reward: {estimatedAirRewards.toFixed(4)} AIR
              </Text>
              <FormField
                label="Referral code (optional)"
                name="referralCode"
                htmlFor="referralCode"
                validate={value => validateReferralCode(value)}
              >
                <TextInput
                  disabled={true}
                  id="referralCode"
                  name="referralCode"
                  onChange={event => {
                    setReferralCode(event.target.value);
                  }}
                  placeholder="ExAmpl41Ref3rrAl"
                  value={referralCode}
                />
              </FormField>
              <FormField
                label="Stay up to date with the auction (optional)"
                name="emailAddress"
                htmlFor="emailAddress"
                validate={value => validateEmailAddress(value)}
              >
                <TextInput
                  disabled={true}
                  id="emailAddress"
                  name="emailAddress"
                  onChange={event => {
                    setEmailAddress(event.target.value);
                  }}
                  placeholder="me@example.com"
                  value={emailAddress}
                />
              </FormField>
            </Box>
            <Box style={{ paddingTop: '24px', paddingLeft: '12px' }}>
              <CheckBox
                disabled={true}
                checked={checked}
                label="I agree to the terms and conditions below"
                onChange={event => setChecked(event.target.checked)}
              />
            </Box>
            <Box
              style={{
                flexDirection: 'row',
                paddingTop: '24px',
                paddingBottom: '32px',
              }}
            >
              {isSubmitting ? (
                <>
                  <Spinner />
                  <Text style={{ paddingLeft: '12px' }}>
                    Staking in progress...
                  </Text>
                </>
              ) : (
                <Button
                  disabled={true}
                  primary
                  color="altair"
                  alignSelf="start"
                  label="Stake Now"
                  type="submit"
                />
              )}
            </Box>
          </Form>
          <Box gap="small">
            <Text size="large" weight={900}>
              Terms and Conditions
            </Text>
            <Text>
              By clicking "Stake Now" your KSM will be locked on Kusama for the
              Altair crowdloan. This means that your KSM will be locked for the
              duration of the parachain slot if Altair wins the auction (48
              weeks), or until the auction ends if Altair does not win the
              auction. The initial transferrable amount of AIR reward is 25%.
              The remaining vests over the lease period of 48 weeks. Proxy or
              multi-signature accounts are not able to receive rewards. Use of
              this page and the above staking function are at your own risk.
              Further, Centrifuge makes no warranties as to the outcome of the
              Altair crowdloan. To the fullest extent allowed by applicable law,
              in no event shall Centrifuge or its affiliates, be liable to you
              or any third party for any damages of any kind.
            </Text>
          </Box>
        </Box>
      )}
    </Section>
  );
};
