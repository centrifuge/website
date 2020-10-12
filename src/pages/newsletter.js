import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import { Box, Heading, Image, Text } from "grommet";
import Column from "../components/Column";
import Grid from "../components/Grid";
import { SubscriptionForm } from "../components/EmailSubscription";

import rocket from "../images/newsletter/rocket.svg";

const NewsletterPage = () => {
  const metadata = {
    title: "Newsletter",
    description: null
  };

  return (
    <Layout>
      <SEO {...metadata} />
      <Container>
        <Grid mt="xlarge" mb="large">
          <Column justifySelf="center">
            <Heading textAlign="center" margin={{ bottom: 0 }}>
              We can't wait to tell you about
              <br />
              our next big thing
            </Heading>
          </Column>
        </Grid>
        <Grid mt="large" mb="large">
          <Column justifySelf="stretch" align="center">
            <Box gap="xsmall" width="large">
              <Text color="#777777">Sign up to our newsletter here:</Text>
              <SubscriptionForm light />
            </Box>
          </Column>
        </Grid>
        <Grid mt="xxlarge" mb="xlarge">
          <Column justifySelf="stretch" align="center">
            <Image src={rocket} style={{ maxWidth: "100%" }} />
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export default NewsletterPage;
