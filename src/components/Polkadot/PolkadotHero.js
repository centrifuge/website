import React, { useContext, useMemo } from "react";
import { Box, Image, ResponsiveContext } from "grommet";
import { JoinWaitlist } from "./JoinWaitlist.js";
import TextHeading1 from "./text/TextHeading1.js";
import hero from "../../images/polkadot/hero.svg";
import heroMobile from "../../images/polkadot/hero-mobile.svg";

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
        <JoinWaitlist
          isEmailSubmitted={isEmailSubmitted}
          setIsEmailSubmitted={setIsEmailSubmitted}
        />
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
