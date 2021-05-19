import React from "react";
import { Col, Row, Section } from "../MDXLayout/shortcodes";
import { Box, Button, Image, Text } from "grommet";

import altair_wordmark from "../../images/altair/altair_wordmark.svg";
import comet from "../../images/altair/comet.svg";
import solar_system from "../../images/altair/solar_system.svg";

const AltairHero = () => {
  return (
    <Box background="black">
      <Section>
        <Row>
          <Col span={4}>
            <Image src={altair_wordmark} />
          </Col>
          <Col span={2} margin={{ bottom: "xlarge" }} />
          <Col span={6} gap="medium">
            <Box>
              <Text size="xlarge" weight={900} textAlign="start">
                Take your assets Interstellar.
              </Text>
              <Text size="large" textAlign="start">
                Spinning real-world assets into Kusama
              </Text>
            </Box>
            <Button primary color="altair" label="Sign up" alignSelf="start" />
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col span={4} gap="medium">
            <Text size="xlarge" weight={900}>
              What is Altair?
            </Text>
            <Text size="large">
              Altair, one of the fastest spinning stars in the galaxy, is the
              only thing spinning faster than Centrifuge: Altair is the bridge
              from Centrifuge to Kusama. You will be able to tokenize real-world
              assets and finance them in the Kusama network.
            </Text>
          </Col>
          <Col span={2} margin={{ bottom: "xlarge" }} />
          <Col span={6} gap="medium">
            <Image src={comet} />
            <Box direction="row" justify="between">
              <Text size="large">
                Tinlake Live
                <br />
                on Ethereum
              </Text>
              <Text size="large">
                Tinlake Live
                <br />
                on Kusuma
              </Text>
              <Text size="large">
                Tinlake Live
                <br />
                on Polkadot
              </Text>
            </Box>
          </Col>
        </Row>
      </Section>
      <Section>
        <Row>
          <Col span={4}>
            <Image src={solar_system} />
          </Col>
          <Col span={2} margin={{ bottom: "xlarge" }} />
          <Col span={6} gap="medium">
            <Box gap="small">
              <Text size="xlarge" weight={900} textAlign="start">
                Tinlake, without the rules:
              </Text>
              <Text size="large" weight={500} textAlign="start">
                Altair is the home for tokenizing experimental assets
              </Text>
            </Box>
            <Text size="large">
              Kusama provides the exact framework needed for launching on
              Polkadot, but Kusama provides much faster, daring parameters. Even
              once Centrifuge is fully live on Polkadot, Kusama will be used for
              minting art NFTs, financing undiscovered assets, and whatever else
              the Kusama community brings to the table. This means anyone can
              become an originator, and anyone can invest.
            </Text>
          </Col>
        </Row>
      </Section>
    </Box>
  );
};

export default AltairHero;
