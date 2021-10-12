import React from "react";
import { Box, Button, Image, Text } from "grommet";
import Container from "../Container";
import bridge from "../../images/polkadot/bridge.svg";

const Emoji = ({ character }) => <span role="img">{character}</span>;

const Bridge = () => {
  return (
    <Box
      background="black"
      pad="120px 0 100px"
      border={[{ color: "white", size: "1px", side: "bottom" }]}
    >
      <Container>
        <Box direction="row" align="center" gap="16px">
          <Box style={{ minWidth: "60%" }}>
            <Image
              src={bridge}
              style={{ maxWidth: "582px", marginBottom: "60px" }}
            />
            <Text
              color="white"
              size="18px"
              weight="400"
              textAlign="center"
              as="i"
            >
              ‍<Emoji character="🛠" /> built on Substrate &nbsp;
              <Emoji character="⚡" /> powered by Ethereum &nbsp;
              <Emoji character="🔗" /> bridged with Polkadot
            </Text>
          </Box>
          <Box style={{ minWidth: "40%" }}>
            <Text color="white" size="28px" weight="500">
              We are the bridge that brings trillions from the real world to
              DeFi.
            </Text>
            <Button
              primary
              color="white"
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
