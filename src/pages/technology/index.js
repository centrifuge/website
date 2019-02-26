import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import Column, { Spacer } from "../../components/Column";
import Animation from "../../components/Animation";
import FullWidthImage from "../../components/FullWidthImage";

import { RichTextRenderer, lastInArray } from "../../helpers";

import block1Animation from "../../lottie/Technology_Q.json";
import technologyBig from "../../images/technology_big.svg";

const TechnologyPage = ({ data }) => {
  const page = data.allContentfulPageTechnology.edges[0].node;

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
            <Animation file={block1Animation} loop={false} />
          </Column>
        </Grid>

        {/* Block 2 */}
        <Grid justify="start" align="start">
          {page.block2.map((block, index) => (
            <React.Fragment key={index}>
              <Column span={{ medium: 4, large: 3 }} mobileSpaced>
                <RichTextRenderer block={block.content} />
              </Column>
              {!lastInArray(page.block2, index) && <Spacer />}
            </React.Fragment>
          ))}
        </Grid>
      </Container>

      {/* Image */}
      <FullWidthImage src={technologyBig} />

      <Container>
        {/* Block 3 */}
        <Grid justify="center">
          <Column span={{ medium: 12, large: 12 }} textAlign="center">
            <RichTextRenderer block={page.block3} />
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export const TechnologyPageQuery = graphql`
  query {
    allContentfulPageTechnology {
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
        }
      }
    }
  }
`;

export default TechnologyPage;
