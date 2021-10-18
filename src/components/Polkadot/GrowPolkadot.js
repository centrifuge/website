import React, { useContext, useMemo } from "react";
import { Box, Image, ResponsiveContext, Text } from "grommet";
import growPolkadot from "../../images/polkadot/grow-polkadot.svg";
import TextHeading1 from "./text/TextHeading1";

const PolkadotHero = () => {
  const size = useContext(ResponsiveContext);
  const isSmall = useMemo(() => size === "small", [size]);
  return (
    <Box
      direction={isSmall ? "column-reverse" : "row"}
      style={{
        borderBottom: "1px solid white",
      }}
    >
      <Box
        background="black"
        align="center"
        width={isSmall ? "auto" : "65vw"}
        pad={isSmall ? "0 16px 47px" : "60px 10%"}
        overflow="hidden"
      >
        <Image src={growPolkadot} width="100%" />
      </Box>
      <Box
        background={isSmall ? "black" : "white"}
        pad={isSmall ? "48px 16px 86px" : "127px 16px 16px"}
        align="center"
        width={isSmall ? "auto" : "35vw"}
        style={{ minWidth: "345px" }}
      >
        <Box
          align="center"
          style={{ position: "sticky", top: "100px", maxWidth: "345px" }}
        >
          <TextHeading1
            textAlign="center"
            margin={{ bottom: isSmall ? "16px" : "33px" }}
          >
            Grow Polkadot DeFi by 100x with Centrifuge
          </TextHeading1>
          <Text
            size={isSmall ? "20px" : "24px"}
            weight={500}
            style={{ textAlign: "center" }}
          >
            Centrifuge is the real-world asset bridge bringing trillions in hard
            assets to the Polkadot ecosystem
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PolkadotHero;
