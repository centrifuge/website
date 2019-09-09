import React from "react";
import { graphql } from "gatsby";
import { Image, Box, Text } from "grommet";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column, { Spacer } from "../components/Column";
import { RichTextRenderer } from "../helpers";
import imgGrandEU from "../images/grand/grand_eu.png";

const EUSubItem = ({ block }) => (
  <Box style={{ width: 170 }}>
    <Image
      style={{ width: "100%", maxWidth: 106, objectFit: "contain" }}
      src={block.mark.file.url}
      alt={block.mark.file.fileName}
    />
    <Text style={{ lineHeight: "21px" }} weight={500} size="large">
      {block.title}
    </Text>
    <Text style={{ lineHeight: "15px" }} size="small">
      {block.description}
    </Text>
  </Box>
);

const GrantPage = ({ data }) => {
  const metadata = {
    title: "Grant",
    description: null
  };

  const page = data.allContentfulPageGrant.edges[0].node;

  return (
    <Layout>
      <SEO {...metadata} />
      <Container>
        {/* Block 1 */}
        <Grid>
          <Column mediumSpaced span={{ medium: 9, large: 6 }} mediumOrder={1}>
            <RichTextRenderer block={page.block1} />
          </Column>

          <Column span={{ medium: 3, large: 1 }} mediumOrder={2} />
          <Column
            justifySelf="stretch"
            span={{ medium: 6, large: 4 }}
            mediumOrder={4}
          >
            {/* <Animation file={block1Animation} loop={false} /> */}
            <Image style={{ width: "100%" }} src={imgGrandEU} />
          </Column>
          <Column span={{ medium: 3, large: 1 }} mediumOrder={3} />
          <Spacer />
        </Grid>

        {/* Block 2 */}
        <Grid>
          <Column mediumSpaced span={{ medium: 10, large: 4 }} mediumOrder={2}>
            <RichTextRenderer block={page.block2} />
          </Column>
          <Column
            mediumSpaced
            justifySelf="center"
            span={{ medium: 10, large: 4 }}
            mediumOrder={5}
          >
            <EUSubItem block={page.block3} />
          </Column>
          <Column mediumSpaced span={{ medium: 10, large: 4 }} mediumOrder={8}>
            <RichTextRenderer block={page.block4} />
          </Column>
          <Column span={{ medium: 1 }} mediumOrder={1} />
          <Column span={{ medium: 1 }} mediumOrder={3} />
          <Column span={{ medium: 1 }} mediumOrder={4} />
          <Column span={{ medium: 1 }} mediumOrder={6} />
          <Column span={{ medium: 1 }} mediumOrder={7} />
        </Grid>
      </Container>
    </Layout>
  );
};

export const GrantPageQuery = graphql`
  query {
    allContentfulPageGrant {
      edges {
        node {
          block1 {
            contentAST
          }
          block2 {
            contentAST
          }
          block3 {
            mark {
              file {
                url
                fileName
              }
            }
            title
            description
          }
          block4 {
            contentAST
          }
        }
      }
    }
  }
`;

export default GrantPage;
