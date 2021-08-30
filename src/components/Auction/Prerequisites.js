import React, { useMemo } from 'react';
import { Button, Box, Text } from 'grommet';
import { CircleAlert } from 'grommet-icons';

export const Prerequisites = ({ injectors }) => {
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

  return (
    <Box gap="medium">
      <Text size="xxlarge" weight={900}>
        Stake KSM
      </Text>
      <Box>
        <Text>You need:</Text>
        <Text>
          &#8212; Polkadot.js browser extension installed (requires Chrome or
          Firefox)
        </Text>
        <Text>&#8212; A Polkadot account</Text>
        <Text>&#8212; A minimum contribution amount of 0.1 KSM</Text>
      </Box>
      <Box>
        <Text weight={900} size="large">
          Refresh after making changes to the Polkadot.js browser extension
        </Text>
      </Box>
      {!hasExtension && (
        <Box>
          <Text weight={900}>
            <CircleAlert size="small" /> No Polkadot.js extension installed
          </Text>
          <Text>Install the Polkadot.js browser extension.</Text>
          <Button
            primary
            alignSelf="start"
            color="altair"
            label="Install Polkadot.js extension"
            style={{ marginTop: '40px', fontSize: '14px' }}
            href="https://polkadot.js.org/extension/"
          />
        </Box>
      )}
    </Box>
  );
};
