import React, { useContext, useMemo } from "react";
import { Box, Button, Image, ResponsiveContext, Text } from "grommet";
import Container from "../Container";

import useCaseAUSD from "../../images/polkadot/useCaseAUSD.svg";
import useCaseMoonbeam from "../../images/polkadot/useCaseMoonbeam.svg";
import useCasePolkadefi from "../../images/polkadot/useCasePolkadefi.svg";
import TextBody from "./text/TextBody";
import TextHeading1 from "./text/TextHeading1";

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
        weight={500}
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
  const size = useContext(ResponsiveContext);
  const isSmall = useMemo(() => size === "small", [size]);
  return (
    <Box background="black">
      <Container>
        <TextHeading1
          color="white"
          css={`
            display: block;
            margin: ${isSmall ? "48px" : "77px"} 0;
          `}
          textAlign="center"
        >
          Use cases we are excited for
        </TextHeading1>
        <Box
          direction={isSmall ? "column" : "row"}
          gap="24px"
          justify="center"
          align={isSmall ? "center" : "stretch"}
          margin={isSmall ? "0 0 64px" : "0 0 108px"}
        >
          <UseCase
            image={useCaseAUSD}
            title="From aHouse to aUSD"
            text="Once Centrifuge moves onto Polkadot, pools can be financed using Acala’s aUSD stablecoin. Through Centrifuge, you’ll be able to mint new aUSD that can be used in the PolkaDeFi world, from a house (or any other asset) you’ve collateralized and financed on Centrifuge."
          />
          <UseCase
            image={useCaseMoonbeam}
            title="Dapp integrations like Sushi on Moonbeam"
            text="The most exciting dapps on Ethereum are going to be building on Moonbeam - making it easy for the Centrifuge parachain to tap into new sources of DeFi liquidity! Imagine Sushi, Aave, and more... Moonbeam gives them the tools to get spun up into the Polkadot ecosystem quickly, making it easier than ever for Centrifuge users to access financing."
          />
          <UseCase
            image={useCasePolkadefi}
            title="The Polkadefi bridge to Ethereum"
            text="Centrifuge is already bridged to Ethereum, meaning users can already access the largest DeFi ecosystem. Once connected to Polkadot, Centrifuge will bridge liquidity between chains. Increased interoperability means we can grow DeFi liquidity across the entire blockchain multiverse."
          />
        </Box>
        {!isEmailSubmitted && (
          <Box align="center" margin={isSmall ? "0 0 64px" : "0 0 100px"}>
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
