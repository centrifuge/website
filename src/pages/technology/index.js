import React from "react";
import { graphql } from "gatsby";

import Layout from "../../components/Layout";
import SEO from "../../components/SEO";

import Container from "../../components/Container";
import Grid from "../../components/Grid";
import Column from "../../components/Column";

import { ParseJSXToReact } from "../../helpers";

const TechnologyPage = ({ data }) => {
  const page = data.allContentfulPageTechnology.edges[0].node;

  return (
    <Layout>
      <SEO title="Technology" />
      <Container>
        <Grid>
          <Column span={{ small: 12, medium: 6, large: 4 }}>
            <ParseJSXToReact block={page.block1} />
          </Column>
        </Grid>
        <Grid align="start">
          {page.block2.map(block => (
            <Column span={{ small: 12, medium: 12, large: 4 }}>
              <ParseJSXToReact block={block.content} />
            </Column>
          ))}
        </Grid>
        <Grid>
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
