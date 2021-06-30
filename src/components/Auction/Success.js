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
          <Text>Come back later to see the auction's progress.</Text>
        </Box>
      </Box>
    </Section>
  );
};
