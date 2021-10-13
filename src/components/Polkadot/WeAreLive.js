import React from "react";
import { Box, Image, Text } from "grommet";
import tinlakeScreenshot from "../../images/polkadot/tinlake-screenshot.png";

const WeAreLive = () => {
  return (
    <Box
      background="black"
      align="center"
      style={{
        paddingTop: "56px",
        paddingBottom: "84px",
        borderBottom: "1px solid white",
      }}
    >
      <Text as="h1" size="48px" weight="600">
        We are already live!
      </Text>

      <a href="https://tinlake.centrifuge.io">
        <Image src={tinlakeScreenshot} />
      </a>
      <Text as="h4" size="24px" weight="500">
        Centrifuge has already financed thousands of assets
      </Text>
      <Text
        size="16px"
        weight="400"
        textAlign="center"
        style={{ maxWidth: 456 }}
      >
        Centrifuge is a working product that has already financed over $30M in
        real-world assets on Ethereum. Once connected to Polkadot, fees will be
        cheaper and transactions will be faster.
      </Text>
    </Box>
  );
};

export default WeAreLive;
