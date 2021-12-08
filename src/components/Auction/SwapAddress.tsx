import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Form,
  FormField,
  Select,
  Spinner,
  Text,
  TextInput,
} from 'grommet';
import { Alert, CircleInformation } from 'grommet-icons';
import { decodeAddress, encodeAddress } from '@polkadot/util-crypto';
import { hexToU8a, isHex } from '@polkadot/util';
import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types';

const KUSAMA_GENESIS_HASH =
  '0xb0a8d493285c2df73290dfb7e61f870f17b41801197a149ca93654499ea3dafe';

const truncateAddress = address => {
  const encodedAddress = encodeAddress(address, 2);
  const firstFifteen = encodedAddress.slice(0, 8);
  const lastTwo = encodedAddress.slice(-2);

  return `${firstFifteen}...${lastTwo}`;
};

const isValidAddressPolkadotAddress = address => {
  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));
  } catch (error) {
    return 'Invalid address format';
  }
};

type Accounts = InjectedAccountWithMeta[];

type FormValues = {
  value: {
    newAddress: string;
  };
};

type Errors = 'Unexpected' | 'Ineligible' | 'Invalid Signature';

export const SwapAddress = () => {
  return (
    <Box>
      <Box
        background="black"
        style={{ minHeight: 'calc(100vh - 432px)' }}
        justify="center"
      >
        <SwapForm />
      </Box>
    </Box>
  );
};

const SwapForm = () => {
  const [accounts, setAccounts] = useState<Accounts>([]);
  const [selectedAccount, setSelectedAccount] = useState<
    Partial<InjectedAccountWithMeta>
  >({});
  const [loading, setLoading] = useState(true);
  const [value, setValue] = React.useState<FormValues['value']>({
    newAddress: '',
  });
  const [error, setError] = useState<Errors>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      const { web3Enable, web3Accounts } = await import(
        '@polkadot/extension-dapp'
      );
      await web3Enable('Altair Auction');

      const allAccounts = await web3Accounts();

      const kusamaAccounts = allAccounts.filter(
        account =>
          account.meta.genesisHash === KUSAMA_GENESIS_HASH ||
          account.meta.genesisHash === '' ||
          account.meta.genesisHash === null,
      );
      setAccounts(kusamaAccounts);
      setSelectedAccount(kusamaAccounts[0]);
      setLoading(false);
    })();
  }, []);

  const storeAddress = async newAddress => {
    setError(undefined);
    setIsSubmitting(true);
    try {
      const { web3Enable, web3FromSource } = await import(
        '@polkadot/extension-dapp'
      );

      await web3Enable('Altair Auction');

      const injector = await web3FromSource(selectedAccount.meta.source);

      const signRaw = injector?.signer?.signRaw;

      const { signature } = await signRaw({
        address: selectedAccount.address,
        data: newAddress,
        type: 'bytes',
      });

      const response = await fetch('/.netlify/functions/swapAddress', {
        method: 'POST',
        body: JSON.stringify({
          currentAddress: encodeAddress(selectedAccount.address, 2),
          newAddress,
          signature,
        }),
      });

      if (response.status === 200) {
        setIsSuccessful(true);
      } else if (response.status === 401) {
        setError('Invalid Signature');
      } else if (response.status === 403) {
        setError('Ineligible');
      } else {
        setError('Unexpected');
      }
    } catch {
      setError('Unexpected');
    }
    setIsSubmitting(false);
  };

  if (loading) {
    return (
      <Box alignSelf="center" justify="center" height="100%">
        <Spinner color="white" size="medium" />
      </Box>
    );
  }

  if (isSuccessful) {
    return (
      <Box gap="8px" alignSelf="center">
        <Text size="32px" weight={600}>
          Thank you!
        </Text>
        <Text>
          We will let you know when your AIR tokens can be claimed at this new
          address.
        </Text>
      </Box>
    );
  }

  return (
    <Box pad="72px 30% 0 30%">
      <Text size="32px" weight={600}>
        Swap Address
      </Text>
      <Box pad="16px 0" gap="8px">
        <Text weight={600}>
          Please submit a new Altair address below before Wednesday, December
          15, 2021 14:00 UTC.
        </Text>
        <Text weight={600}>
          <CircleInformation color="white" size="12px" /> For now, Ledger
          hardware wallets are not supported by Altair, please do not enter an
          address that is connected to a Ledger.
        </Text>
        <Text weight={600}>
          <CircleInformation color="white" size="12px" /> Do not enter an
          address that has already claimed AIR rewards.
        </Text>
      </Box>
      {error && (
        <Box pad="8px 0 24px 0">
          <SwapError error={error} />
        </Box>
      )}
      <Form
        onChange={nextValue => setValue(nextValue)}
        onSubmit={({ value }: FormValues) => storeAddress(value.newAddress)}
        value={value}
      >
        <Box gap="24px">
          <FormField label="Kusama account">
            <Select
              children={account => (
                <Box pad="small" style={{ textAlign: 'left' }}>
                  <div>
                    {account.meta?.name} - {truncateAddress(account.address)}
                  </div>
                </Box>
              )}
              options={accounts}
              onChange={({ option }) => setSelectedAccount(option)}
              valueKey="address"
              valueLabel={
                <Box pad="small" style={{ textAlign: 'left' }}>
                  <div>
                    {selectedAccount.meta?.name} -{' '}
                    {truncateAddress(selectedAccount?.address)}
                  </div>
                </Box>
              }
              value={`${selectedAccount?.meta?.name} - ${selectedAccount?.address}`}
            />
          </FormField>
          <FormField
            name="newAddress"
            htmlFor="new-address"
            label="New Altair Address"
            validate={value => isValidAddressPolkadotAddress(value)}
          >
            <TextInput id="new-address" name="newAddress" />
          </FormField>
        </Box>
        <Box pad="24px 0 0 0">
          <Button
            type="submit"
            primary
            label={
              isSubmitting || isSuccessful ? (
                <Box direction="row" gap="8px">
                  <Spinner
                    pad="7px"
                    margin="3px 0 0 2px"
                    height="5px"
                    width="5px"
                  />
                  <Text>Submitting...</Text>
                </Box>
              ) : (
                'Submit'
              )
            }
            alignSelf="end"
            disabled={isSubmitting || isSuccessful}
          />
        </Box>
      </Form>
    </Box>
  );
};

const SwapError = ({ error }: { error: Errors }) => {
  if (error === 'Ineligible') {
    return (
      <Box background="#616161" pad="16px 24px">
        <Box align="center" direction="row" gap="6px">
          <Alert color="white" size="16px" />
          <Text weight={500}>You are not eligible to swap your address.</Text>
        </Box>
      </Box>
    );
  }

  if (error === 'Invalid Signature') {
    return (
      <Box background="#616161" pad="16px 24px">
        <Box align="center" direction="row" gap="6px">
          <Alert color="white" size="16px" />
          <Text weight={500}>Invalid signature!</Text>
        </Box>
      </Box>
    );
  }

  return (
    <Box background="#616161" pad="16px 24px">
      <Box align="center" direction="row" gap="6px">
        <Alert color="white" size="16px" />
        <Text weight={500}>Something went wrong!</Text>
      </Box>
      <Text>
        <Text margin="0 4px 0 0">Please try to submit again.</Text>
      </Text>
    </Box>
  );
};
