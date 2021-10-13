import React from "react";
import { Box, Image, Text } from "grommet";
import GrowPolkadotDefi from "../../images/polkadot/GrowPolkadotDefi.svg";

const PolkadotHero = () => {
  return (
    <Box
      direction="row"
      style={{
        borderBottom: "1px solid white",
      }}
    >
      <Box
        background="black"
        align="center"
        width="65vw"
        pad="60px 10%"
        overflow="hidden"
      >
        <Image src={GrowPolkadotDefi} />
      </Box>
      <Box background="white" pad="127px 119px" width="35vw">
        <Box style={{ position: "sticky", top: "100px" }}>
          <Text
            size="48px"
            weight={600}
            textAlign="center"
            margin={{ bottom: "33px" }}
          >
            Grow Polkadot DeFi by 100x with Centrifuge
          </Text>
          <Text size="24px" weight={500} style={{ textAlign: "center" }}>
            Centrifuge is the real-world asset bridge for trillions in hard
            assets to the Polkadot ecosystem
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PolkadotHero;
