import React, { useContext, useMemo } from "react";
import { Box, Image, ResponsiveContext, Text } from "grommet";
import aboutCrowdloan from "../../images/polkadot/aboutCrowdloan.svg";
import aboutCrowdloanMobile from "../../images/polkadot/aboutCrowdloanMobile.svg";
import TextBody from "./text/TextBody";

const AboutCrowdloan = () => {
  const size = useContext(ResponsiveContext);
  const isSmall = useMemo(() => size === "small", [size]);
  return (
    <Box
      direction={isSmall ? "column" : "row"}
      border={[{ side: "bottom", color: "white", size: "1px" }]}
    >
      <Box
        background="white"
        width={isSmall ? "auto" : "35vw"}
        pad={isSmall ? "48px 16px 0" : "70px 66px"}
      >
        <Text
          size={isSmall ? "36px" : "40px"}
          weight={600}
          textAlign="center"
          margin={{ bottom: isSmall ? "36px" : "45px" }}
        >
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
          We need DOT holders to stake their DOT to our crowdloan slot auction.
          Doing so will lock your DOT to our 2 year lease, which you will get
          back when the lease it up. In the meanwhile, you will reap various CFG
          rewards in return for staking your DOT and believing in Centrifuge.
        </TextBody>
      </Box>
      <Box
        background={isSmall ? "white" : "black"}
        width={isSmall ? "auto" : "65vw"}
        pad={isSmall ? "64px 16px" : "64px 150px 73px"}
        align="center"
        justify="center"
        overflow="hidden"
      >
        <Image
          src={isSmall ? aboutCrowdloanMobile : aboutCrowdloan}
          width={isSmall ? "100%" : "565px"}
        />
      </Box>
    </Box>
  );
};

export default AboutCrowdloan;
