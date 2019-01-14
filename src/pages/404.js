import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import { Heading, Text, Box, Button } from "grommet";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Something went wrong" />
    <Container>
      <Box fill pad={{ top: "large", bottom: "xlarge" }} align="center">
        <div>
          <Heading textAlign="center">This page doesn’t exist</Heading>
          <Text textAlign="center" as="p">
            You might have mistyped the address, or the page might have moved.
          </Text>
        </div>
        <Button margin={{ top: "small" }} primary href="/" label="Back home" />
      </Box>
    </Container>
  </Layout>
);

export default NotFoundPage;
