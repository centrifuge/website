import React from 'react';
import { Anchor, Box, Text } from 'grommet';
import { StatusGood } from 'grommet-icons';
import { Section } from '../MDXLayout/shortcodes';

export const Success = props => {
  return (
    <Section>
      <Box gap="small">
        <Text weight={600}>
          <StatusGood size="small" /> Your {props.ksmAmount} KSM have been
          staked successfully!
        </Text>
        <Box>
          <Anchor
            target="_blank"
            href={`https://kusama.subscan.io/extrinsic/${props.hash}`}
            primary
            label="View transaction on Subscan"
          />
          <Text>
            Check out the crowdloan's progress on the{' '}
            <Anchor
              href="https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama.elara.patract.io#/parachains/crowdloan"
              target="_blank"
            >
              Polkadot/Substrate portal.
            </Anchor>
          </Text>
        </Box>
      </Box>
    </Section>
  );
};
