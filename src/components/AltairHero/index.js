import React, { useContext } from "react";
import { Col, Row, Section } from "../MDXLayout/shortcodes";
import { Box, Button, Image, ResponsiveContext, Text } from "grommet";

import altair_wordmark from "../../images/altair/altair_wordmark.svg";
import hero_background from "../../images/altair/hero_background.svg";
import comet from "../../images/altair/comet.svg";
import solar_system from "../../images/altair/solar_system.svg";

const AltairHero = () => {
  const size = useContext(ResponsiveContext);

  return (
    <Box background="black" style={{ position: "relative" }}>
      {size !== "small" && (
        <Image
          src={hero_background}
          style={{
            position: "absolute",
            right: 0,
            width: "20vw"
          }}
        />
      )}
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
            <Button
              primary
              color="altair"
              label="Stake KSM"
              alignSelf="start"
              href="/altair/crowdloan"
            />
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
              Altair is one of the fastest spinning stars in the galaxy, and is
              also the bridge from Centrifuge to Kusama. You will now be able to
              tokenize real-world assets and finance them on the Kusama network.
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
                on Kusama
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
          <Col span={5}>
            <Image src={solar_system} />
          </Col>
          <Col span={1} margin={{ bottom: "xlarge" }} />
          <Col span={6} gap="medium">
            <Box gap="small">
              <Text size="xlarge" weight={900} textAlign="start">
                Pushing the Limits on Kusama
              </Text>
              <Text size="large" weight={500} textAlign="start">
                The home for tokenizing experimental assets
              </Text>
            </Box>
            <Text size="large">
              Altair combines the industry-leading infrastructure built by
              Centrifuge to finance real-world assets (RWA) on Centrifuge Chain,
              with the newest experimental features — before they go live on
              Centrifuge Chain. Even once Centrifuge is fully live on Polkadot,
              Kusama will be used for minting art NFTs, financing undiscovered
              assets, and whatever else the Kusama community brings to the
              table.
            </Text>
          </Col>
        </Row>
      </Section>
    </Box>
  );
};

export default AltairHero;
