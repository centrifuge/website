import React from "react";
import { Button } from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const IndexPage = () => (
  <Layout>
    <SEO />
    <h1>Home</h1>
    <Button primary onClick={() => console.log("🦄")}>Button</Button>
  </Layout>
);

export default IndexPage;
