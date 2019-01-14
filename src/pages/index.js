import React from "react";
import { Button, Box } from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const IndexPage = () => (
  <Layout>
    <SEO />
    <h1>Home</h1>

    <Button primary label="Our mission" />

    <Button label="Join the team" />

    <Box pad="medium" margin={{ top: "medium" }} fill background="brand">
      <Button alignSelf="center" color="white" onClick={() => alert("Clicked!")} label="Join the list" />
    </Box>
  </Layout>
);

export default IndexPage;
