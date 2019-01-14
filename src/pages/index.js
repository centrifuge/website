import React from "react";
import { Button, Box } from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import EmailSubscription from "../components/EmailSubscription";

const IndexPage = () => (
  <Layout>
    <SEO />
    <Container>
      <h1>Home</h1>
    </Container>
    <EmailSubscription />
  </Layout>
);

export default IndexPage;
