import React, { useContext, useMemo } from "react";
import { Box, Button, Image, ResponsiveContext, Text } from "grommet";
import Container from "../Container";
import bridge from "../../images/polkadot/bridge.svg";

const Emoji = ({ character }) => <span role="img">{character}</span>;

const EmojiLine = ({ children, emoji }) => (
  <div style={{ whiteSpace: "nowrap" }}>
    <Emoji character={emoji} /> &nbsp;{children}
  </div>
);

const Bridge = () => {
  const size = useContext(ResponsiveContext);
  const isSmall = useMemo(() => size === "small", [size]);
  return (
    <Box
      background={isSmall ? "brand" : "black"}
      pad={isSmall ? "24px 16px" : "120px 0 100px"}
      border={[{ color: "white", size: "1px", side: "bottom" }]}
    >
      <Container>
        <Box
          direction={isSmall ? "column-reverse" : "row"}
          align="center"
          gap="16px"
        >
          <Box style={{ minWidth: "60%" }} align={isSmall ? "center" : "start"}>
            <Image
              src={bridge}
              style={{
                maxWidth: "582px",
                marginBottom: isSmall ? "30px" : "60px",
                marginTop: isSmall ? "30px" : "0",
              }}
              width="100%"
            />
            <Text
              color="white"
              size="18px"
              weight="400"
              textAlign="center"
              as="i"
            >
              <Box
                direction={isSmall ? "column" : "row"}
                align="start"
                gap={isSmall ? "0" : "8px"}
              >
                <EmojiLine emoji="🛠">built on Substrate</EmojiLine>
                <EmojiLine emoji="⚡">powered by Ethereum</EmojiLine>
                <EmojiLine emoji="🔗">bridged with Polkadot</EmojiLine>
              </Box>
              ‍
            </Text>
          </Box>
          <Box
            style={{ minWidth: "40%" }}
            align={isSmall ? "center" : "flex-start"}
          >
            <Text
              color="white"
              size="28px"
              weight="500"
              textAlign={isSmall ? "center" : "left"}
            >
              We are the bridge that brings trillions from the real world to
              DeFi.
            </Text>
            <Button
              primary
              color={isSmall ? "black" : "white"}
              size="large"
              href="/about"
              margin={{ top: "32px" }}
              style={{
                fontSize: 16,
                padding: "8px",
                width: 155,
                textDecoration: "none",
              }}
            >
              About Centrifuge
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Bridge;
