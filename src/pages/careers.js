import React from "react";
import { graphql } from "gatsby";
import { Heading, Box } from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Jobs from "../components/Jobs";
import Container from "../components/Container";
import Column, { Spacer } from "../components/Column";
import Grid from "../components/Grid";
import FullWidthImage from "../components/FullWidthImage";
import Animation from "../components/Animation";

import { RichTextRenderer } from "../helpers";

import block1Animation from "../lottie/Team_Q.json";
import careersBig from "../images/careers_big.svg";

const CareersPage = ({ data }) => {
  const metadata = {
    title: "Careers",
    description: null
  };

  const page = data.allContentfulPageCareers.edges[0].node;

  return (
    <Layout>
      <SEO {...metadata} />
      <Container>
        {/* Block 2 */}
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
        <Grid mb="" justify="">
          <Column span={{ medium: 4, large: 3 }}>
            <Heading level="2" lined>
              {page.block2Title}
            </Heading>
          </Column>
        </Grid>
        <Grid mt="" mb="" align="start" justify="start">
          <Spacer />
          <Column span={{ medium: 12, large: 11 }}>
            <Jobs />
          </Column>
        </Grid>

        {/* Block 2 (4) - Continued */}
        <Grid mt="large">
          <Column span={{ medium: 4, large: 4 }}>
            <RichTextRenderer block={page.block4} />
          </Column>
        </Grid>
      </Container>

      {/* Image */}
      <FullWidthImage src={careersBig} />

      <Container>
        {/* Block 3 */}
        <Grid mb="" justify="">
          <Column span={{ medium: 4, large: 4 }}>
            <Heading level="2" lined>
              {page.block3Title}
            </Heading>
          </Column>
        </Grid>
        <Grid mt="" align="start" justify="start">
          {page.block3.map((block, index) => (
            <React.Fragment key={index}>
              <Spacer />
              <Column span={{ medium: 6, large: 5 }}>
                <Box margin={{ bottom: "large" }}>
                  <RichTextRenderer block={block.content} />
                </Box>
              </Column>
            </React.Fragment>
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
