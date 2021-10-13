import React from "react";
import { Box, Image, Text } from "grommet";
import { JoinWaitlist } from "./JoinWaitlist.js";
import hero from "../../images/polkadot/hero.svg";

const PolkadotHero = () => {
  return (
    <Box
      background="black"
      border={[{ size: "1px", color: "white", side: "bottom" }]}
      pad="54px 0 0"
      direction="row"
      justify="between"
      align="center"
      id="polkadot-hero"
    >
      <Box align="center" pad="0 0 0 135px">
        <Text
          size="48px"
          weight={600}
          margin={{ bottom: "48px" }}
          textAlign="center"
          style={{ width: 390 }}
        >
          The home for real-world DeFi on Polkadot
        </Text>
        <JoinWaitlist />
      </Box>
      <Box>
        <Image src={hero} />
      </Box>
    </Box>
  );
};

export default PolkadotHero;
