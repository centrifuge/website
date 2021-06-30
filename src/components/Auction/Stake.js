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
  const [allAccounts, setAllAccounts] = useState([]);

  const [accounts, setAccounts] = useState([]);
  const [freeBalance, setFreeBalance] = useState('');
  const [api, setApi] = useState();
  const [injector, setInjector] = useState();
  const [injectors, setInjectors] = useState([]);

  useEffect(() => {
    (async () => {
      const injectors = await web3Enable('Altair Auction');

      const allAccounts = await web3Accounts();

      const kusamaAccounts = allAccounts.filter(
        account => account.meta.genesisHash === KUSAMA_GENESIS_HASH,
      );

      setAllAccounts(allAccounts);
      setInjectors(injectors);
      setAccounts(kusamaAccounts);
      setSelectedAccount(kusamaAccounts[0]);
    })();
  }, []);

  useEffect(
    () => {
      setBalanceLoading(true);
      (async () => {
        const wsProvider = new WsProvider('wss://kusama-rpc.polkadot.io');

        const api = await ApiPromise.create({ provider: wsProvider });

        if (selectedAccount?.address) {
          const web3Injector = await web3FromAddress(selectedAccount.address);

          setApi(api);
          setInjector(web3Injector);

          const balances = await api.query.system.account(
            selectedAccount.address,
          );

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
          setIsContributing(true);
          if (status.status.isFinalized) {
            setHash(extrinsic.hash.toHex());
            setIsFinalized(true);
            setIsContributing(false);
          }

          if (status.status.dispatchError) {
            setError(status.status.dispatchError);
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
      if (ksmAmount && isValidKsmAmount && checked) {
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

  if (!hasExtension) {
    return (
      <Section gap="medium">
        <Box>
          <Text size="xxlarge" weight={900}>
            Stake Kusama
          </Text>
        </Box>
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

  if (isWeb3Injected && !allAccounts.length) {
    return (
      <Section>
        <Box alignSelf="center">
          You need a Kusama wallet with a balance of at least 0.1 KSM.
        </Box>
      </Section>
    );
  }

  if (!accounts.length || !freeBalance || !api || !injector) {
    return (
      <Section>
        <Box alignSelf="center">
          <Spinner size="medium" />
        </Box>
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
          Stake Kusama
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
                onChange={event => setKsmAmount(event.target.value)}
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
            </Text>
          </Box>
          <CheckBox
            disabled={isContributing}
            checked={checked}
            label="I agree to the terms and conditions."
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
              style={{ marginTop: '25px' }}
              onClick={() => contribute()}
            />
          )}
        </Box>
      )}
    </Section>
  );
};
