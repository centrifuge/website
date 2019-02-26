import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column, { Spacer } from "../components/Column";
import Animation from "../components/Animation";
import FullWidthImage from "../components/FullWidthImage";
import DeepLink from "../components/DeepLink";

import { RichTextRenderer, lastInArray } from "../helpers";

import block1Animation from "../lottie/Ecosystem_Q.json";
import ecosystemBig from "../images/ecosystem_big.svg";

const EcosystemPage = ({ data }) => {
  const page = data.allContentfulPageEcosystem.edges[0].node;

  return (
    <Layout>
      <SEO {...page.seo} />
      <Container>
        {/* Block 1 */}
        <Grid>
          <Column span={{ medium: 6, large: 6 }}>
            <RichTextRenderer block={page.block1} />
          </Column>
          <Spacer />
          <Column justifySelf="stretch" span={{ medium: 6, large: 4 }}>
            <Animation file={block1Animation} />
          </Column>
        </Grid>

        {/* Block 2 */}
        <Grid align="start">
          {page.block2.map((block, index) => (
            <React.Fragment key={index}>
              <Column mobileSpaced span={{ medium: 4, large: 3 }}>
                <RichTextRenderer block={block.content} />
              </Column>
              {!lastInArray(page.block2, index) && <Spacer />}
            </React.Fragment>
          ))}
        </Grid>
      </Container>

      {/* Image */}
      <FullWidthImage src={ecosystemBig} />

      <Container>
        {/* Block 3 */}
        <Grid mb="xlarge" justify="">
          <Column span={{ medium: 6, large: 6 }}>
            <DeepLink id="use-cases">
              <RichTextRenderer block={page.block3} />
            </DeepLink>
          </Column>
        </Grid>

        {/* Block 4 */}
        <Grid mt="" align="start">
          {page.block4.map((block, index) => (
            <React.Fragment key={index}>
              <Column mobileSpaced span={{ medium: 4, large: 3 }}>
                <RichTextRenderer block={block.content} />
              </Column>
              {!lastInArray(page.block4, index) && <Spacer />}
            </React.Fragment>
          ))}
        </Grid>

        {/* Block 5 */}
        <Grid justify="center">
          <Column textAlign="center">
            <RichTextRenderer block={page.block5} />
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export const EcosystemPageQuery = graphql`
  query {
    allContentfulPageEcosystem {
      edges {
        node {
          seo {
            title
            description
          }
          block1 {
            contentAST
          }
          block2 {
            content {
              contentAST
            }
          }
          block3 {
            contentAST
          }
          block4 {
            content {
              contentAST
            }
          }
          block5 {
            contentAST
          }
        }
      }
    }
  }
`;

export default EcosystemPage;
