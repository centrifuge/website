import React from "react";
import { Heading, Paragraph, Image } from "grommet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column, { Spacer } from "../components/Column";

import medium from "../images/medium-wordmark.svg";
import { ExternalLink } from "../components/Links";

const MEDIUM_CDN = "https://cdn-images-1.medium.com/max/400";

const MEDIUM_URL = "https://medium.com/centrifuge/";

const HighlightPost = ({ post }) => (
  <Grid align="start" mt="" pt="">
    <Column span={{ medium: 12, large: 6 }}>
      <Image
        style={{ maxWidth: "100%" }}
        src={`${MEDIUM_CDN}/${post.node.virtuals.previewImage.imageId}`}
      />
    </Column>
    <Spacer width={2} />
    <Column span={{ medium: 12, large: 4 }}>
      <Heading level="1">{post.node.title}</Heading>
      <Paragraph>{post.node.virtuals.subtitle}</Paragraph>
      <ExternalLink href={`${MEDIUM_URL}${post.node.uniqueSlug}`}>
        Read more...
      </ExternalLink>
    </Column>
  </Grid>
);

const MediumWordmark = () => (
  <img style={{ width: 98 }} alt="Medium Wordmark" src={medium} />
);

const NewsPage = ({ data }) => {
  const mediumPosts = data.allMediumPost.edges;

  return (
    <Layout>
      <SEO title="News" />
      <Container>
        <Grid>
          <Column>
            <h1 hidden>News</h1>
            <MediumWordmark />
          </Column>
        </Grid>

        {mediumPosts.map((post, index) => {
          if (index === 0) return <HighlightPost key={index} post={post} />;

          return (
            <pre>
              <code>{JSON.stringify(post, null, 2)}</code>
            </pre>
          );
        })}
      </Container>
    </Layout>
  );
};

export const NewsPageQuery = graphql`
  query {
    allMediumPost(limit: 4, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          uniqueSlug
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
        }
      }
    }
  }
`;

export default NewsPage;
