import React from "react";
import { Anchor, Box, Image, Text } from "grommet";

import { Section } from "../../components/MDXLayout/shortcodes";
import illustration from "../../images/ao/tvl-taf-stats.svg";

const SecondSection = () => {
  return (
    <Section gap="large">
      <Box>
        <Text textAlign="center" size="xlarge" weight={500}>
          The liquidity provider for real-world assets
        </Text>
      </Box>
      <Box gap="medium">
        <Image src={illustration} />
        <Box align="end">
          <Text weight={500}>See more stats at:</Text>
          <Anchor href="https://tinlake.info" target="_blank">
            Tinlake.info
          </Anchor>
        </Box>
      </Box>
    </Section>
  );
};

export default SecondSection;
