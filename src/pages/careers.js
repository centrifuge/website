import React from "react";
import { graphql } from "gatsby";
import { Heading } from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Jobs from "../components/Jobs";
import Container from "../components/Container";
import Column, { Spacer } from "../components/Column";
import Grid from "../components/Grid";
import Animation from "../components/Animation";

import { ParseJSXToReact, lastInArray } from "../helpers";

import block1Animation from "../lottie/Team.json";
import bigAnimation from "../lottie/Team_BIG.json";

const CareersPage = ({ data }) => {
  const page = data.allContentfulPageCareers.edges[0].node;

  return (
    <Layout>
      <SEO {...page.seo} />
      <Container>
        {/* Block 2 */}
        <Grid>
          <Column span={{ medium: 6, large: 7 }}>
            <ParseJSXToReact block={page.block1} />
          </Column>
          <Spacer />
          <Column span={{ medium: 6, large: 4 }}>
            <Animation file={block1Animation} />
          </Column>
        </Grid>

        {/* Block 2 */}
        <Grid>
          <Column justifySelf="stretch">
            <Heading level="2">{page.block2Title}</Heading>
          </Column>
          <Column>
            <Jobs />
          </Column>
        </Grid>

        {/* Animation Block */}
        <Grid>
          <Column>
            <Animation file={bigAnimation} />
          </Column>
        </Grid>

        {/* Block 3 */}
        <Grid justify="start" align="start">
          <Column justifySelf="stretch">
            <Heading level="2">{page.block3Title}</Heading>
          </Column>
          {page.block3.map((block, index) => (
            <>
              <Column span={{ medium: 6, large: 5 }}>
                <ParseJSXToReact block={block.content} />
              </Column>
              {!lastInArray(page.block3, index) && <Spacer />}
            </>
          ))}
        </Grid>

        {/* Block 4 */}
        <Grid justify="center">
          <Column textAlign="center">
            <ParseJSXToReact block={page.block4} />
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export const CareersPageQuery = graphql`
  query {
    allContentfulPageCareers {
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
          block2Title
          block3Title
          block3 {
            content {
              childContentfulRichText {
                html
              }
            }
          }
          block4 {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }
`;

export default CareersPage;
