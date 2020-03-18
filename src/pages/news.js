import React from "react";
import { Heading, Box, Button } from "grommet";
import { graphql } from "gatsby";
import YoutubePlayer from "react-player/lib/players/YouTube";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column, { Spacer } from "../components/Column";
import { ExternalLink } from "../components/Links";
import { HighlightPost, MediumPost, PressArticle } from "../components/News";
import {
  MEDIUM_URL,
  YOUTUBE_URL,
  RichTextRenderer
} from "../helpers";

import medium from "../images/medium-wordmark.svg";
import youtube from "../images/youtube-wordmark.svg";

const MediumWordmark = () => (
  <img style={{ width: 98 }} alt="Medium Wordmark" src={medium} />
);

const YouTubeWordmark = () => (
  <img style={{ width: 98 }} alt="YouTube Wordmark" src={youtube} />
);

const ResponsivePlayer = ({ url }) => (
  <div style={{ position: "relative", paddingTop: `${100 / (16 / 9)}%` }}>
    <YoutubePlayer
      style={{ position: "absolute", top: 0, left: 0 }}
      height="100%"
      width="100%"
      controls={true}
      url={url}
    />
  </div>
);

const NewsPage = ({ data }) => {
  const metadata = {
    title: "News",
    description: null
  };

  const page = data.allContentfulPageNews.edges[0].node;

  const mediumPosts = data.mediumFeed.posts.slice(0, 4);
  const highlightPost = data.mediumFeed.posts[0];

  return (
    <Layout>
      <SEO {...metadata} />
      <Container>
        {/* Hero Block */}
        <Grid mb="large">
          <Column>
            <h1 hidden>News</h1>
            <ExternalLink href={MEDIUM_URL}>
              <MediumWordmark />
            </ExternalLink>
          </Column>
        </Grid>
        <HighlightPost post={highlightPost} />

        {/* Medium Posts */}
        <Grid mt="" justify="" align="flex-start">
          {mediumPosts.map((post, index) => {
            if (index === 0) return null;

            return (
              <React.Fragment key={index}>
                <Column mobileSpaced span={{ medium: 4, large: 4 }}>
                  <MediumPost post={post} />
                </Column>
              </React.Fragment>
            );
          })}
        </Grid>

        {/* Video Block */}
        <Grid mb="large">
          <Column>
            <ExternalLink href={YOUTUBE_URL}>
              <YouTubeWordmark />
            </ExternalLink>
          </Column>
        </Grid>
        <Grid mt="" justify="" align="flex-start">
          <Column span={{ medium: 10, large: 6 }}>
            <Box margin={{ bottom: "medium" }}>
              <ResponsivePlayer url={page.blockVideo.url} />
            </Box>
          </Column>
          <Spacer width={2} />
          <Column span={{ medium: 10, large: 4 }}>
            <div>
              <Heading level={2} lined>
                {page.blockVideo.title}
              </Heading>
              <RichTextRenderer block={page.blockVideo.description} />
              <Button
                margin={{ top: "large" }}
                plain
                label="Please find more videos in our YouTube channel"
                href="https://www.youtube.com/channel/UCfNkoq7YLrr8MeSJ3a6jVcA"
              />
            </div>
          </Column>
        </Grid>

        {/* CTA Block */}
        <Grid justify="center">
          <Column textAlign="center">
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
          blockVideo {
            thumbnail {
              file {
                url
              }
            }
            title
            description {
              contentAST
            }
            url
          }
          blockMediaInquiry {
            contentAST
          }
        }
      }
    }

    mediumFeed: lambdaMediumPosts {
      posts: items {
        title
        link
        thumbnail
        description
      }
    }
  }
`;

export default NewsPage;
