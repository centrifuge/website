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
  const metadata = {
    title: "Technology",
    description: null
  };

  const page = data.allContentfulPageTechnology.edges[0].node;
  return (
    <Layout>
      <SEO {...metadata} />

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

      <Container
        id="download"
        css={`
          margin-top: -100px;
          padding-top: 100px;
        `}
      >
        {/* Block 3 */}
        <Grid justify="start" align="start" mt={0}>
          {page.block3.map((block, index) => (
            <React.Fragment key={index}>
              <Column span={{ medium: 4, large: 3 }} mobileSpaced>
                <RichTextRenderer block={block.content} />
              </Column>
              {!lastInArray(page.block2, index) && <Spacer />}
            </React.Fragment>
          ))}
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
          block1 {
            contentAST
          }
          block2 {
            content {
              contentAST
            }
          }
          block3 {
            content {
              contentAST
            }
          }
        }
      }
    }
  }
`;

export default TechnologyPage;
