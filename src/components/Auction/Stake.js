import { Section } from '../MDXLayout/shortcodes';
import { encodeAddress } from '@polkadot/util-crypto';
import {
  Anchor,
  Box,
  Button,
  CheckBox,
  FormField,
  Grid,
  Image,
  Select,
  Spinner,
  Text,
  TextInput,
} from 'grommet';
import { Alert, CircleInformation } from 'grommet-icons';
import React, { useEffect, useMemo, useState } from 'react';
import {
  isWeb3Injected,
  web3Accounts,
  web3Enable,
  web3FromAddress,
} from '@polkadot/extension-dapp';
import { Success } from './Success';
import { ApiPromise, WsProvider } from '@polkadot/api';
import ksm_token_logo from '../../images/altair/ksm_token_logo.svg';

const KUSAMA_GENESIS_HASH =
  '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe';

export const Stake = () => {
  const [selectedAccount, setSelectedAccount] = useState({});
  const [disabled, setDisabled] = useState(true);
  const [ksmAmount, setKsmAmount] = useState('');
  const [checked, setChecked] = useState(false);
  const [isContributing, setIsContributing] = useState(false);
  const [isFinalized, setIsFinalized] = useState(false);
  const [error, setError] = useState();
  const [hash, setHash] = useState();
  const [balanceLoading, setBalanceLoading] = useState(true);

  const [accounts, setAccounts] = useState([]);
  const [freeBalance, setFreeBalance] = useState('');
  const [api, setApi] = useState();
  const [injector, setInjector] = useState();
  const [injectors, setInjectors] = useState([]);
  const [accountLoading, setAccountLoading] = useState(true);

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
        const wsProvider = new WsProvider('wss://kusama-rpc.polkadot.io');

        const api = await ApiPromise.create({ provider: wsProvider });

        if (selectedAccount?.address) {
          const web3Injector = await web3FromAddress(selectedAccount?.address);

          const balances = await api.query.system.account(
            selectedAccount.address,
          );

          setApi(api);
          setInjector(web3Injector);
          setFreeBalance((balances.data.free.toNumber() / 10 ** 12).toString());
          setBalanceLoading(false);
        }
      })();
    },
    [selectedAccount],
  );

  const contribute = async () => {
    try {
      const extrinsic = api.tx.crowdloan.contribute(
        2021,
        parseFloat(ksmAmount) * 10 ** 12,
        null,
      );
      await extrinsic.signAndSend(
        selectedAccount.address,
        { signer: injector.signer },
        status => {
          const error = status.events.filter(({ event }) =>
            api.events.system.ExtrinsicFailed.is(event),
          );

          setIsContributing(true);

          if (status.status.isFinalized) {
            setHash(extrinsic.hash.toHex());
            setIsFinalized(true);
            setIsContributing(false);
          }

          if (status.status.dispatchError || error.length) {
            setError('error occurred');
            setIsFinalized(false);
            setIsContributing(false);
          }
        },
      );
    } catch (err) {
      setError(err);
    }
  };

  const isValidKsmAmount = useMemo(
    () => {
      if (
        /^\d*(\.\d+)?$/.test(ksmAmount) &&
        parseFloat(ksmAmount) >= 0.1 &&
        parseFloat(ksmAmount) <= parseFloat(freeBalance)
      ) {
        return true;
      }

      return false;
    },
    [freeBalance, ksmAmount],
  );

  useEffect(
    () => {
      if (
        ksmAmount &&
        isValidKsmAmount &&
        checked &&
        ksmAmount !== freeBalance
      ) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    },
    [checked, ksmAmount],
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

  if (accountLoading) {
    return (
      <Section>
        <Box alignSelf="center">
          <Spinner size="medium" />
        </Box>
      </Section>
    );
  }

  if (!hasExtension) {
    return (
      <Section gap="medium">
        <Text size="xxlarge" weight={900}>
          Stake KSM
        </Text>
        <Box gap="medium">
          <Text size="large" weight={400}>
            You need the{' '}
            <Anchor target="_blank" href="https://polkadot.js.org/extension/">
              Polkadot{'{.js}'} browser extension
            </Anchor>{' '}
            installed and a Kusama wallet with a balance of at least 0.1 KSM.
          </Text>
        </Box>
      </Section>
    );
  }

  if (!accounts.length) {
    return (
      <Section gap="medium">
        <Text size="xxlarge" weight={900}>
          Stake KSM
        </Text>
        <Box>You need a Kusama wallet with a balance of at least 0.1 KSM.</Box>
      </Section>
    );
  }

  if (isFinalized) {
    return <Success hash={hash} ksmAmount={ksmAmount} />;
  }

  const Error = () => {
    return (
      <Box
        background={{ color: '#FFE8ED' }}
        style={{ width: '500px', padding: '24px', borderRadius: '4px' }}
      >
        <Text weight={600}>
          <Alert size="small" /> Unexpected error!
        </Text>
        <Text>Try again.</Text>
      </Box>
    );
  };

  return (
    <Section gap="medium">
      <Box>
        <Text size="xxlarge" weight={900}>
          Stake KSM
        </Text>
        <Text weight={600} style={{ marginTop: '36px' }}>
          <CircleInformation size="small" /> Note: Proxy accounts and multi
          signatures are not able to receive rewards
        </Text>
      </Box>
      {error && <Error />}
      {isWeb3Injected && (
        <Box gap="medium" style={{ width: '500px' }}>
          <FormField label="Kusama account">
            <Select
              disabled={isContributing}
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
              label="Staking amount (minimum of 0.1 KSM)"
            >
              <TextInput
                disabled={isContributing}
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
              <Grid columns={['90px', 'auto', 'auto']}>
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
                {ksmAmount === freeBalance && (
                  <Text color="red">
                    Be sure to leave enough for network fees!
                  </Text>
                )}
              </Grid>
            </Text>
          </Box>
          <CheckBox
            disabled={isContributing}
            checked={checked}
            label="I agree to the terms and conditions below"
            onChange={event => setChecked(event.target.checked)}
          />
          {isContributing ? (
            <Grid columns={['36px', 'auto']}>
              <Spinner />
              <Text>Staking in progress...</Text>
            </Grid>
          ) : (
            <Button
              disabled={disabled}
              primary
              alignSelf="start"
              label="Stake Now"
              style={{ marginTop: '24px', marginBottom: '48px' }}
              onClick={() => contribute()}
            />
          )}
          <Box gap="small">
            <Text size="large" weight={900}>
              Terms and Conditions
            </Text>
            <Text>
              By clicking "Stake Now" your KSM will be locked on Kusama for the
              Altair crowdloan (read more about{' '}
              <Anchor href="https://kusama.network/auctions/" target="_blank">
                parachain slot auctions
              </Anchor>
              ). This means that your KSM will be locked for the duration of the
              parachain slot if Altair wins the auction (48 weeks), or until the
              auction ends if Altair does not win the auction.
            </Text>
            <Text>
              Use of this page and the above staking function are at your own
              risk. Further, Centrifuge makes no warranties as to the outcome of
              the Altair crowdloan. To the fullest extent allowed by applicable
              law, in no event shall Centrifuge or its affiliates, be liable to
              you or any third party for any damages of any kind.
            </Text>
          </Box>
        </Box>
      )}
    </Section>
  );
};
