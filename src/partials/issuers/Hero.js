import React from "react";
import { Box, Button, Text } from "grommet";
import styled, { keyframes } from "styled-components";
import { FullWidthSection } from "../../components/MDXLayout/shortcodes";
import hero from "../../images/issuers/hero.svg";

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const MarqueeText = styled(Text)`
  display: inline-block;
  animation: ${marquee} 20s linear infinite;
  width: ${props => props.width};
  text-shadow: ${props => `${props.width} 0 currentColor, calc(${
    props.width
  } * 2) 0 currentColor,
    calc(${props.width} * 3) 0 currentColor, calc(${
    props.width
  } * 4) 0 currentColor`};

  :hover {
    animation-play-state: paused;
  }
`;

const Hero = () => {
  const marqueeText =
    "Real Estate Bridge Loans, Payment Advances, Emerging Market Consumer Loans, " +
    "Trade Receivables, Revenue Based Financing, Cargo & Freight Forwarding Invoices, " +
    "Branded Inventory Financing, Music Streaming Invoices, Embedded Supply Chain Financing";

  return (
    <Box
      background="black"
      style={{
        backgroundImage: `url("${hero}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <FullWidthSection margin={{ vertical: "xxxlarge" }}>
        <Box align="center" gap="large">
          <Box align="center" gap="medium">
            <Text size="40px" weight={500} textAlign="center">
              Borderless, Limitless Capital
            </Text>
            <Text size="24px" textAlign="center">
              Centrifuge is a fully compliant bridge to
              <br />
              the billions of dollars locked in crypto.
            </Text>
          </Box>
          <Button primary label="Access Capital" href="/issuers/form" />
        </Box>
      </FullWidthSection>
      <Box
        fill="horizontal"
        background="accent-1"
        pad={{
          vertical: "small",
          horizontal: "20px"
        }}
        style={{
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Box overflow="hidden">
          <MarqueeText
            width={`${marqueeText.length}ch`}
            time="20s"
            size="large"
            weight={500}
          >
            {marqueeText}
          </MarqueeText>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
