import React from "react";
import { Box, Button, Text } from "grommet";

import { FullWidthSection } from "../../components/MDXLayout/shortcodes";
import hero from "../../images/issuers/hero.svg";

const Hero = () => {
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
      >
        <marquee behavior="scroll" direction="left">
          <Text textAlign="center" alignSelf="center">
            Real Estate Bridge Loans, Payment Advances, Emerging Market Consumer
            Loans, Trade Receivables, Revenue Based Financing, Cargo & Freight
            Forwarding Invoices, Branded Inventory Financing, Music Streaming
            Invoices, Embedded Supply Chain Financing
          </Text>
        </marquee>
      </Box>
    </Box>
  );
};

export default Hero;
