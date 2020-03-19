import React from "react";
import { Heading, Box, Button } from "grommet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Column, { Spacer } from "../components/Column";
import Grid from "../components/Grid";
import Animation from "../components/Animation";
import { LatestNews } from "../components/News";

import { RichTextRenderer } from "../helpers";

import block1Animation from "../lottie/Main01.json";
import block2Image from "../images/block2-image.svg";
import block3Animation from "../lottie/Main03_Q.json";
import block4Animation from "../lottie/Main04_Q.json";

const IndexPage = ({ data }) => {
  const page = data.allContentfulPageHome.edges[0].node;
  const mediumPosts = data.mediumFeed.posts.slice(0, 3);

  return (
    <Layout>
      <SEO />
      <Container>
        {/* Block 1 */}
        <Grid staggered>
          <Column span={{ medium: 6, large: 4 }}>
            <RichTextRenderer hyphens="unset" block={page.block1} />
          </Column>
          <Spacer />
          <Column justifySelf="stretch" span={{ medium: 6, large: 7 }}>
            <Animation file={block1Animation} loop={true} />
          </Column>
        </Grid>

        {/* Medium Articles */}
        <Grid staggered>
          <Column>
            <Heading level={2} lined>
              Latest News
            </Heading>
            <LatestNews posts={mediumPosts} />
            <Box align="center" margin={{ top: "large" }}>
              <Button primary href="/news" label="More news" />
            </Box>
          </Column>
        </Grid>

        {/* Block 2 */}
        <Grid staggered>
          <Column span={{ medium: 6, large: 7 }}>
            <img alt="" src={block2Image} />
          </Column>
          <Spacer />
          <Column span={{ medium: 6, large: 4 }}>
            <RichTextRenderer block={page.block2} />
          </Column>
        </Grid>

        {/* Block 3 */}
        <Grid staggered>
          <Column span={{ medium: 6, large: 4 }}>
            <RichTextRenderer block={page.block3} />
          </Column>
          <Spacer />
          <Column justifySelf="stretch" span={{ medium: 6, large: 7 }}>
            <Animation file={block3Animation} />
          </Column>
        </Grid>

        {/* Block 4 */}
        <Grid staggered>
          <Column justifySelf="stretch" span={{ medium: 6, large: 7 }}>
            <Animation file={block4Animation} />
          </Column>
          <Spacer />
          <Column span={{ medium: 6, large: 4 }}>
            <RichTextRenderer block={page.block4} />
          </Column>
        </Grid>

        {/* Block 5 */}
        <Grid staggered>
          <Column span={{ medium: 12, large: 8 }}>
            <RichTextRenderer block={page.block5} />
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export const IndexPageQuery = graphql`
  query {
    allContentfulPageHome {
      edges {
        node {
          block1 {
            contentAST
          }
          block2 {
            contentAST
          }
          block3 {
            contentAST
          }
          block4 {
            contentAST
          }
          block5 {
            contentAST
          }
        }
      }
    }

    mediumFeed: lambdaMediumPosts {
      posts: items {
        title
        link
        thumbnail
        description
      }
    }
  }
`;

export default IndexPage;
