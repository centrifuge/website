import React from "react";
import { Heading, Paragraph, Button, Box, Stack, Image } from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column from "../components/Column";

import wordmark from "../images/centrifuge-wordmark.svg";
import developerWordmark from "../images/centrifuge-developer-wordmark.svg";
import wordmarkLight from "../images/centrifuge-wordmark-light.svg";

const BrandPage = () => {
  const metadata = {
    title: "Brand",
    description: null
  };

  return (
    <Layout>
      <SEO {...metadata} />
      <Container>
        <Grid justify="" align="">
          <Column span={{ medium: 8, large: 8 }}>
            <Heading level={1} lined>
              Our Brand
            </Heading>

            {/* Brand */}
            <Box margin={{ bottom: "large" }}>
              {/* Dark on Light */}
              <Paragraph>Dark Wordmark on Light Background</Paragraph>
              <Stack fill anchor="center" margin={{ bottom: "large" }}>
                <Box round="xsmall" elevation="small" height="medium" />
                <Image height={48} src={wordmark} />
              </Stack>

              {/* Light on Dark */}
              <Paragraph>Light Wordmark on Dark Background</Paragraph>
              <Stack fill anchor="center" margin={{ bottom: "large" }}>
                <Box
                  background="black"
                  round="xsmall"
                  height="medium"
                  style={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.20)" }}
                />
                <Image height={48} src={wordmarkLight} />
              </Stack>

              {/* Developer Dark on Light */}
              <Paragraph>Dark Developer Wordmark on Light Background</Paragraph>
              <Stack fill anchor="center" margin={{ bottom: "large" }}>
                <Box round="xsmall" elevation="small" height="medium" />
                <Image height={48} src={developerWordmark} />
              </Stack>
            </Box>

            {/* Axis */}
            <Box>
              <Heading level={2} lined>
                Axis Design System
              </Heading>
              <Paragraph>
                Single source of truth used to build user interfaces for
                Centrifuge
              </Paragraph>
              <Box margin={{ top: "large" }} gap="medium" direction="row">
                <Button
                  plain
                  href="https://axis.centrifuge.io/"
                  label="Visit the Storybook"
                />
                <Button
                  plain
                  href="https://github.com/centrifuge/axis"
                  label="View the GitHub repository"
                />
              </Box>
            </Box>
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export default BrandPage;
