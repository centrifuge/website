import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Column, { Spacer } from "../components/Column";
import Grid from "../components/Grid";
import Animation from "../components/Animation";

import { RichTextRenderer } from "../helpers";

import block1Image from "../images/block1-image.svg";
import block2Image from "../images/block2-image.svg";
import block3Image from "../images/block3-image.svg";
import block4Image from "../images/block4-image.svg";

import block1Animation from "../lottie/Main01.json";
// import block2Animation from "../lottie/Main02.json";
// import block3Animation from "../lottie/Main03.json";
// import block4Animation from "../lottie/Main04.json";

const IndexPage = ({ data }) => {
  const page = data.allContentfulPageHome.edges[0].node;

  return (
    <Layout>
      <SEO />
      <Container>
        {/* Block 1 */}
        <Grid staggered>
          <Column span={{ medium: 6, large: 4 }}>
            <RichTextRenderer block={page.block1} />
          </Column>
          <Spacer />
          <Column span={{ medium: 6, large: 7 }}>
            <Animation file={block1Animation} />
            {/* <img alt="" src={block1Image} /> */}
          </Column>
        </Grid>

        {/* Block 2 */}
        <Grid staggered>
          <Column span={{ medium: 6, large: 7 }}>
            {/* <Animation file={block2Animation} /> */}
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
          <Column span={{ medium: 6, large: 7 }}>
            {/* <Animation file={block3Animation} /> */}
            <img alt="" src={block3Image} />
          </Column>
        </Grid>

        {/* Block 4 */}
        <Grid staggered>
          <Column span={{ medium: 6, large: 7 }}>
            {/* <Animation file={block4Animation} /> */}
            <img alt="" src={block4Image} />
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
  }
`;

export default IndexPage;
