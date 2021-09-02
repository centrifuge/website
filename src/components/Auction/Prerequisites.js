import React from 'react';
import { Anchor, Box, Text } from 'grommet';
import { InstallExtension } from './InstallExtension';
import { AccountNotFound } from './AccountNotFound';

const InfoPanel = ({ accounts, hasExtension }) => {
  if (!hasExtension) {
    return <InstallExtension />;
  }

  if (!accounts.length) {
    return <AccountNotFound />;
  }

  return null;
};

export const Prerequisites = ({ accounts, hasExtension }) => (
  <Box>
    <Box pad="30px" gap="medium">
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
      <Box gap="8px">
        <Text size="16px">You need:</Text>
        <Text size="16px">
          &#8212;{' '}
          <Text weight={900} size="16px">
            Polkadot browser extension
          </Text>{' '}
          installed (requires Chrome or Firefox)
        </Text>
        <Text size="16px">
          &#8212;{' '}
          <Text weight={900} size="16px">
            Polkadot account
          </Text>{' '}
          (set to Allow use on any chain or Kusama)
        </Text>
        <Text size="16px">
          &#8212;{' '}
          <Text weight={900} size="16px">
            0.1 KSM
          </Text>{' '}
          minimum staking amount
        </Text>
      </Box>
    </Box>
    <InfoPanel accounts={accounts} hasExtension={hasExtension} />
  </Box>
);
