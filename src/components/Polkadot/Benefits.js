import React from "react";
import { Box, Image, Text } from "grommet";
import Container from "../Container";

import cardBonus from "../../images/polkadot/cardBonus.svg";
import cardLeaseTime from "../../images/polkadot/cardLeaseTime.svg";
import cardBenefit from "../../images/polkadot/cardBenefit.svg";
import TextBody from "./TextBody";

const Card = ({ image, title, text }) => (
  <Box width="312px" align="center">
    <Image src={image} height={96} />

    <Text as="h4" color="white" size="24px" weight={500} textAlign="center">
      {title}
    </Text>
    <TextBody color="white" textAlign="center">
      {text}
    </TextBody>
  </Box>
);

const Benefits = () => {
  return (
    <Box
      background="black"
      pad="86px 0 72px"
      style={{
        borderBottom: "1px solid white",
      }}
    >
      <Container>
        <Box direction="row" justify="between" gap="16px">
          <Card
            image={cardBonus}
            title="Bonus rewards!"
            text="Just like the Altair crowdloan, Centrifuge’s slot auction will be packed with rewards for staking DOT to our crowdloan."
          />
          <Card
            image={cardLeaseTime}
            title="Lease time: 2 years"
            text="We are applying for the maximum lease time to commit to a long term relationship with polkadot. Our product will be ready to launch quickly after auction."
          />
          <Card
            image={cardBenefit}
            title="Benefitting the entire Polkadot community"
            text="The vision for Centrifuge on Polkadot has been clear since day one. We’ve been contributing to the Polkadot ecosystem, including ChaChaCha"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Benefits;
