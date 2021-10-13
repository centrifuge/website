import React from "react";
import { Box, Image, Text } from "grommet";
import aboutCentrifugeSvg from "../../images/polkadot/AboutCentrifuge.svg";
import TextBody from "./TextBody";

const AboutCrowdloan = () => {
  return (
    <Box
      direction="row"
      border={[{ side: "bottom", color: "white", size: "1px" }]}
    >
      <Box background="white" width="40vw" pad="70px 66px">
        <Text as="h2" size="40px" weight="600" textAlign="center">
          About the Centrifuge Crowdloan
        </Text>
        <TextBody margin={{ bottom: "22px" }}>
          Centrifuge is built on Substrate, meaning it can connect to Polkadot
          as a parachain. By doing so, Centrifuge can communicate with all the
          other DeFi protocols connected to the Polkadot ecosystem.
        </TextBody>
        <TextBody margin={{ bottom: "22px" }}>
          This will open up Centrifuge to both the Ethereum and Polkadot
          ecosystems, positioning Centrifuge as the #1 real-world asset protocol
          in the crypto multiverse.{" "}
        </TextBody>
        <TextBody>
          We need DOT holders to stake thier DOT to our crowdloan slot auction.
          Doing so will lock your DOT to our 2 year lease, which you will get
          back when the lease it up. In the meanwhile, you will reap various CFG
          rewards in return for staking your DOT and believing in Centrifuge.
        </TextBody>
      </Box>
      <Box
        background="black"
        width="60vw"
        pad="63px 150px 73px"
        align="center"
        justify="center"
        overflow="hidden"
      >
        <Image src={aboutCentrifugeSvg} width="565px" />
      </Box>
    </Box>
  );
};

export default AboutCrowdloan;
