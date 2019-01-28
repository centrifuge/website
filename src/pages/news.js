import React from "react";
import { Heading, Paragraph, Image, Box, Button } from "grommet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column, { Spacer } from "../components/Column";
import { ExternalLink } from "../components/Links";

import { lastInArray } from "../helpers";
import RichTextRenderer from "../helpers/richTextRenderer";

import medium from "../images/medium-wordmark.svg";

const MEDIUM_CDN = "https://cdn-images-1.medium.com/max/400";

const MEDIUM_URL = "https://medium.com/centrifuge/";

const LinkedMediumImage = ({ imageId, slug }) => (
  <ExternalLink href={`${MEDIUM_URL}${slug}`}>
    <Image style={{ maxWidth: "100%" }} src={`${MEDIUM_CDN}/${imageId}`} />
  </ExternalLink>
);

const HighlightPost = ({ post }) => (
  <Grid align="start" mt="" pt="">
    <Column span={{ medium: 12, large: 6 }}>
      <LinkedMediumImage
        imageId={post.virtuals.previewImage.imageId}
        slug={post.uniqueSlug}
      />
      <Box margin={{ top: "medium" }}>
        <div>
          <Button
            plain
            target="_blank"
            rel="noopener noreferrer"
            href={MEDIUM_URL}
          >
            Centrifuge on Medium
          </Button>
        </div>
      </Box>
    </Column>
    <Spacer width={2} />
    <Column span={{ medium: 12, large: 4 }}>
      <PostInfo
        title={post.title}
        subtitle={post.virtuals.subtitle}
        link={`${MEDIUM_URL}${post.uniqueSlug}`}
      />
    </Column>
  </Grid>
);

const PostInfo = ({ title, subtitle, link, heading }) => (
  <>
    <Heading level={heading || "1"} noLine={heading === "3" ? true : false}>
      {title}
    </Heading>
    <Paragraph margin={{ bottom: "medium" }}>{subtitle}</Paragraph>
    <Button plain target="_blank" rel="noopener noreferrer" href={link}>
      Read more...
    </Button>
  </>
);

const MediumWordmark = () => (
  <img style={{ width: 98 }} alt="Medium Wordmark" src={medium} />
);

const NewsPage = ({ data }) => {
  const page = data.allContentfulPageNews.edges[0].node;

  const mediumPosts = data.allMediumPost.edges;
  const highlightPost = data.allMediumPost.edges[0].node;

  return (
    <Layout>
      <SEO {...page.seo} />
      <Container>
        <Grid mb="medium" pb="medium">
          <Column>
            <h1 hidden>News</h1>
            <MediumWordmark />
          </Column>
        </Grid>

        <HighlightPost post={highlightPost} />

        <Grid justify="start" align="start">
          {mediumPosts.map((post, index) => {
            if (index === 0) return null;

            return (
              <>
                <Column span={{ medium: 4, large: 3 }}>
                  <Box margin={{ bottom: "medium" }}>
                    <LinkedMediumImage
                      imageId={post.node.virtuals.previewImage.imageId}
                      slug={post.node.uniqueSlug}
                    />
                  </Box>
                  <PostInfo
                    title={post.node.title}
                    subtitle={post.node.virtuals.subtitle}
                    link={`${MEDIUM_URL}${post.node.uniqueSlug}`}
                    heading="3"
                  />
                </Column>
                {!lastInArray(mediumPosts, index) && <Spacer />}
              </>
            );
          })}
        </Grid>

        <Grid mb="medium" pb="medium" justify="">
          <Column span={{ medium: 6, large: 4 }}>
            <Heading level="2">Press about Centrifuge</Heading>
          </Column>
        </Grid>

        <Grid mt="" pt="" align="start">
          {page.blockPress.map((article, index) => (
            <Column key={index} span={{ medium: 6, large: 6 }}>
              <Box direction="row" gap="large">
                <Box basis="1/4">
                  <Image
                    style={{ width: "100%", maxWidth: "100%" }}
                    src={article.agency.logo.file.url}
                    alt={article.agency.logo.file.fileName}
                  />
                </Box>
                <Box basis="3/4">
                  <PostInfo
                    title={article.articleTitle}
                    subtitle={article.articleSummary.articleSummary}
                    link={article.articleLink}
                    heading="3"
                  />
                </Box>
              </Box>
            </Column>
          ))}
        </Grid>

        <Grid justify="center">
          <Column textAlign="center" style={{ fontSize: 18 }}>
            <RichTextRenderer block={page.blockMediaInquiry} />
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export const NewsPageQuery = graphql`
  query {
    allContentfulPageNews {
      edges {
        node {
          seo {
            title
          }
          blockPress {
            agency {
              name
              logo {
                file {
                  url
                  fileName
                }
              }
            }
            articleTitle
            articleSummary {
              articleSummary
            }
            articleLink
          }
          blockMediaInquiry {
            contentAST
          }
        }
      }
    }
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
