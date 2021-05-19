import React from "react";
import { Box, Button, Text } from "grommet";
import { Section } from "../MDXLayout/shortcodes";

const JoinAltairCommunity = () => {
  return (
    <Box background="linear-gradient(180deg, #000000 0%, #FAB961 100%)">
      <Section gap="xlarge">
        <Box>
          <Text size="xlarge" weight={900} textAlign="center" color="white">
            Join the Altair Community:
          </Text>
          <Text size="large" weight={500} textAlign="center" color="white">
            the crowdloan before the intergalactic storm
          </Text>
        </Box>
        <Box>
          <Box gap="large">
            <Box>
              <Text size="xlarge" weight={900} textAlign="center" color="white">
                KSM Reward:
              </Text>
              <Text size="xlarge" weight={500} textAlign="center" color="white">
                50+ AIR : 1 KSM
              </Text>
            </Box>
            <Button primary label="Sign up" alignSelf="center" />
          </Box>
          <Text size="large" color="white" weight={500}>
            Altair is bidding for the
            <br />
            longest slot (48 weeks) available.
          </Text>
        </Box>
      </Section>
    </Box>
  );
};

export default JoinAltairCommunity;
