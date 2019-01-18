import React from "react";
import { graphql } from "gatsby";
import Lottie from "lottie-react-web";

import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import Column, { Spacer } from "../../components/Column";

import { ParseJSXToReact, lastInArray } from "../../helpers";

import block1Animation from "../../lottie/Technology.json";
import bigAnimation from "../../lottie/Technology_BIG.json";

const TechnologyPage = ({ data }) => {
  const page = data.allContentfulPageTechnology.edges[0].node;

  return (
    <Layout>
      <SEO {...page.seo} />
      <Container>
        {/* Block 1 */}
        <Grid>
          <Column span={{ small: 12, medium: 12, large: 7 }}>
            <ParseJSXToReact block={page.block1} />
          </Column>
          <Spacer />
          <Column span={{ small: 12, medium: 12, large: 4 }}>
            <Lottie options={{ animationData: block1Animation }} />
          </Column>
        </Grid>

        {/* Block 2 */}
        <Grid justify="start" align="start">
          {page.block2.map((block, index) => (
            <>
              <Column span={{ small: 12, medium: 12, large: 3 }}>
                <ParseJSXToReact block={block.content} />
              </Column>
              {!lastInArray(page.block2, index) && <Spacer />}
            </>
          ))}
        </Grid>

        {/* Animation Block */}
        <Grid>
          <Column>
            <Lottie options={{ animationData: bigAnimation }} />
          </Column>
        </Grid>

        {/* Block 3 */}
        <Grid justify="center">
          <Column span={{ small: 12, medium: 12, large: 12 }}>
            <ParseJSXToReact block={page.block3} />
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
            childContentfulRichText {
              html
            }
          }
          block2 {
            content {
              childContentfulRichText {
                html
              }
            }
          }
          block3 {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }
`;

export default TechnologyPage;
