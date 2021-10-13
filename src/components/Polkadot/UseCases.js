import React from "react";
import { Box, Button, Image, Text } from "grommet";
import Container from "../Container";

import useCaseAUSD from "../../images/polkadot/useCaseAUSD.svg";
import useCaseMoonbeam from "../../images/polkadot/useCaseMoonbeam.svg";
import useCasePolkadefi from "../../images/polkadot/useCasePolkadefi.svg";
import TextBody from "./TextBody";

const UseCase = ({ image, title, text }) => (
  <Box
    width="376px"
    background="white"
    style={{ borderRadius: 10 }}
    css={`
      transition: transform 100ms;
      :hover {
        transform: scale(1.05);
      }
    `}
  >
    <Image src={image} />
    <Box
      pad="24px 31px"
      border={{
        color: "#eee",
        size: "2px",
        style: "solid",
        side: "top",
      }}
    >
      <Text
        size="24px"
        weight="500"
        textAlign="center"
        style={{ marginBottom: 16 }}
      >
        {title}
      </Text>
      <TextBody>{text}</TextBody>
    </Box>
  </Box>
);

const UseCases = ({ isEmailSubmitted }) => {
  return (
    <Box background="black">
      <Container>
        <Text
          as="h1"
          color="white"
          size="48px"
          weight="600"
          margin="77px 0"
          textAlign="center"
        >
          Use cases we are excited for
        </Text>
        <Box direction="row" gap="24px" justify="center" margin="0 0 108px">
          <UseCase
            image={useCaseAUSD}
            title="From aHouse to aUSD"
            text="Once Centrifuge moves onto Polkadot, pools can be financed using Acala’s aUSD stablecoin. Through Centrifuge, you’ll be able to mint new aUSD that can be used in the PolkaDeFi world, from a house (or any other asset) you’ve collateralized and financed on Centrifuge."
          />
          <UseCase
            image={useCaseMoonbeam}
            title="Dapp integrations from Sushi and Moonbeam"
            text=""
          />
          <UseCase
            image={useCasePolkadefi}
            title="The Polkadefi bridge to Ethereum"
            text="Centrifuge is already bridged to Ethereum, meaning you will be able to use Dai and other ERC20 tokens within the Polkadot ecosystem"
          />
        </Box>
        {!isEmailSubmitted && (
          <Box align="center" margin="0 0 100px">
            <a href="#polkadot-hero">
              <Button
                color="brand"
                label="Join the waitlist"
                primary
                type="submit"
              />
            </a>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default UseCases;
