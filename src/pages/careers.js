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
import FullWidthImage from "../components/FullWidthImage";

import { RichTextRenderer, lastInArray } from "../helpers";

import block1Animation from "../lottie/Team.json";
import careersBig from "../images/careers_big.svg";

const CareersPage = ({ data }) => {
  const page = data.allContentfulPageCareers.edges[0].node;

  return (
    <Layout>
      <SEO {...page.seo} />
      <Container>
        {/* Block 2 */}
        <Grid>
          <Column span={{ medium: 6, large: 7 }}>
            <RichTextRenderer block={page.block1} />
          </Column>
          <Spacer />
          <Column span={{ medium: 6, large: 4 }}>
            <Animation file={block1Animation} />
          </Column>
        </Grid>

        {/* Block 2 */}
        <Grid mb="small" pb="small" justify="">
          <Column span={{ medium: 4, large: 3 }} justifySelf="stretch">
            <Heading level="2" lined>
              {page.block2Title}
            </Heading>
          </Column>
        </Grid>
        <Grid mt="" pt="" pb="large" mb="large" align="start" justify="start">
          <Column>
            <Jobs />
          </Column>
        </Grid>

        {/* Block 4 */}
        <Grid justify="center" mt="" pt="">
          <Column textAlign="center">
            <RichTextRenderer block={page.block4} />
          </Column>
        </Grid>

        {/* Image */}
        <FullWidthImage src={careersBig} />

        {/* Block 3 */}
        <Grid mb="small" pb="small" justify="">
          <Column span={{ medium: 4, large: 3 }} justifySelf="stretch">
            <Heading level="2" lined>
              {page.block3Title}
            </Heading>
          </Column>
        </Grid>
        <Grid mt="" pt="" align="start" justify="start">
          {page.block3.map((block, index) => (
            <>
              <Column span={{ medium: 6, large: 5 }}>
                <RichTextRenderer block={block.content} />
              </Column>
              {!lastInArray(page.block3, index) && <Spacer />}
            </>
          ))}
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
            contentAST
          }
          block2Title
          block3Title
          block3 {
            content {
              contentAST
            }
          }
          block4 {
            contentAST
          }
        }
      }
    }
  }
`;

export default CareersPage;
