import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column from "../components/Column";

const NewsPage = () => (
  <Layout>
    <SEO title="News" />
    <Container>
      <Grid>
        <Column>news</Column>
      </Grid>
    </Container>
  </Layout>
);

export default NewsPage;
