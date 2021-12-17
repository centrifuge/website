import React, { useContext, useMemo } from "react";
import { Box, Image, ResponsiveContext, Button, Text } from "grommet";
// import { JoinWaitlist } from "./JoinWaitlist.js";
import TextHeading1 from "./text/TextHeading1.js";
import hero from "../../images/polkadot/hero.svg";
import heroMobile from "../../images/polkadot/hero-mobile.svg";
import parallelHeikoLogo from "../../images/polkadot/parallel-heiko-logo.svg";
import ExternalLink from "../Links/externalLink.js";

const PolkadotHero = ({ isEmailSubmitted, setIsEmailSubmitted }) => {
  const size = useContext(ResponsiveContext);
  const isSmall = useMemo(() => size === "small", [size]);
  return (
    <Box
      background="black"
      border={[{ size: "1px", color: "white", side: "bottom" }]}
      pad="54px 0 0"
      direction={isSmall ? "column" : "row"}
      justify="between"
      align="center"
      id="polkadot-hero"
    >
      <Box align="center" pad={isSmall ? "0" : "0 0 0 135px"}>
        <TextHeading1
          margin={{ bottom: "48px" }}
          textAlign="center"
          style={{ width: 390 }}
        >
          The home for Real World DeFi on Polkadot
        </TextHeading1>
        {/* <JoinWaitlist
          isEmailSubmitted={isEmailSubmitted}
          setIsEmailSubmitted={setIsEmailSubmitted}
        /> */}
        <Button
          color="brand"
          label="Join the crowdloan"
          primary
          href="/parachain/crowdloan"
        />
        <ExternalLink
          unstyled={1}
          href="https://crowdloan.parallel.fi/#/auction/contribute/polkadot/2031"
          style={{ color: "white" }}
        >
          <Box margin="16px 0 0" direction="row" align="center" gap="8px">
            <img src={parallelHeikoLogo} alt="" />
            <Text
              size="14px"
              weight={400}
              textAlign="left"
              style={{ textDecoration: "underline" }}
            >
              Contribute with Parallel Heiko
            </Text>
          </Box>
        </ExternalLink>
      </Box>
      <Box
        width={isSmall ? "100%" : "auto"}
        margin={{ bottom: isSmall ? "48px" : "0" }}
      >
        <Image src={isSmall ? heroMobile : hero} />
      </Box>
    </Box>
  );
};

export default PolkadotHero;
