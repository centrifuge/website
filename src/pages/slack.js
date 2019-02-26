import React from "react";
import { graphql } from "gatsby";
import { Heading, Box, Image } from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column, { Spacer } from "../components/Column";
import SlackForm from "../components/SlackForm";

import { RichTextRenderer } from "../helpers";

import slackImage from "../images/slack-image.svg";

const SlackPage = ({ data }) => {
  const page = data.allContentfulPageSlackInvite.edges[0].node;

  return (
    <Layout>
      <SEO {...page.seo} />
      <Container>
        <Grid align="center" justify="center">
          <Column span={{ medium: 6, large: 5 }} mobileSpaced>
            <Image src={slackImage} />
          </Column>
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
