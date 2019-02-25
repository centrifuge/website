import React from "react";
import { graphql } from "gatsby";
import { Heading, Box } from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column, { Spacer } from "../components/Column";
import SlackForm from "../components/SlackForm";

import { RichTextRenderer } from "../helpers";

const SlackPage = ({ data }) => {
  const page = data.allContentfulPageSlackInvite.edges[0].node;

  return (
    <Layout>
      <SEO {...page.seo} />
      <Container>
        <Grid align="end">
          <Column span={{ medium: 6, large: 5 }} />
          <Spacer />
          <Column span={{ medium: 6, large: 6 }}>
            <Heading level={1}>{page.headline}</Heading>
            <Box margin={{ bottom: "large" }}>
              <SlackForm />
            </Box>
            <RichTextRenderer block={page.content} />
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export const SlackPageQuery = graphql`
  query {
    allContentfulPageSlackInvite {
      edges {
        node {
          seo {
            title
          }
          headline
          content {
            contentAST
          }
        }
      }
    }
  }
`;

export default SlackPage;
