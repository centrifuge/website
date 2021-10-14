import React, { useContext, useMemo } from "react";
import { Box, Image, ResponsiveContext, Text } from "grommet";
import tinlakeScreenshot from "../../images/polkadot/tinlake-screenshot.png";
import TextBody from "./text/TextBody";
import TextHeading1 from "./text/TextHeading1";

const WeAreLive = () => {
  const size = useContext(ResponsiveContext);
  const isSmall = useMemo(() => size === "small", [size]);

  return (
    <Box
      background="black"
      align="center"
      pad={isSmall ? "48px 16px 48px" : "56px 16px 84px"}
      style={{
        borderBottom: "1px solid white",
      }}
    >
      <TextHeading1
        textAlign="center"
        style={{ marginBottom: isSmall ? "27px" : "53px" }}
      >
        We are already live!
      </TextHeading1>

      <a href="https://tinlake.centrifuge.io">
        <Image src={tinlakeScreenshot} width={isSmall ? "100%" : "auto"} />
      </a>
      <Text
        size={isSmall ? "20px" : "24px"}
        weight={500}
        textAlign="center"
        margin={
          isSmall
            ? { top: "32px", bottom: "12px" }
            : { top: "48px", bottom: "20px" }
        }
      >
        Centrifuge has already financed thousands of assets
      </Text>
      <TextBody textAlign="center" style={{ maxWidth: 456 }}>
        Centrifuge is a working product that has already financed over $30M in
        real-world assets on Ethereum. Once connected to Polkadot, fees will be
        cheaper and transactions will be faster.
      </TextBody>
    </Box>
  );
};

export default WeAreLive;
