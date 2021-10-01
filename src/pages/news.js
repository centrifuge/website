import React from "react";
import { Text, Anchor } from "grommet";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column from "../components/Column";
import { ExternalLink } from "../components/Links";
import { HighlightPost, Post, YoutubePost } from "../components/News";
import { MEDIUM_URL, YOUTUBE_URL } from "../helpers";

import medium from "../images/medium-wordmark.svg";
import youtube from "../images/youtube-wordmark.svg";

const MediumWordmark = () => (
  <img style={{ width: 98 }} alt="Medium Wordmark" src={medium} />
);

const YouTubeWordmark = () => (
  <img style={{ width: 98 }} alt="YouTube Wordmark" src={youtube} />
);

const NewsPage = ({ data }) => {
  const metadata = {
    title: "News",
    description: null
  };

  const highlightPost = data.prs.edges[0].node;
  const prPosts = data.prs.edges.slice(1, 4);
  const ytVideos = data.ytVideos.edges.slice(0, 3);
  const mediumPosts = data.mediumFeed.posts?.slice(0, 3);

  return (
    <Layout>
      <SEO {...metadata} />
      <Container>
        {/* Hero Block */}
        <Grid mt="xlarge" mb="large">
          <Column>
            <HighlightPost post={highlightPost} />
          </Column>
        </Grid>

        <Grid mt="large" mb="xlarge" justify="" align="flex-start">
          {prPosts.map((post, index) => {
            return (
              <React.Fragment key={index}>
                <Column mobileSpaced span={{ medium: 4, large: 4 }}>
                  <Post post={post.node} />
                </Column>
              </React.Fragment>
            );
          })}
        </Grid>

        {/* Medium Posts */}
        <Grid mt="xlarge" mb="large">
          <Column>
            <h1 hidden>News</h1>
            <ExternalLink href={MEDIUM_URL}>
              <MediumWordmark />
            </ExternalLink>
          </Column>
        </Grid>
        <Grid mt="large" mb="xlarge" justify="" align="flex-start">
          {mediumPosts?.map((post, index) => {
            return (
              <React.Fragment key={index}>
                <Column mobileSpaced span={{ medium: 4, large: 4 }}>
                  <Post post={post} />
                </Column>
              </React.Fragment>
            );
          })}
        </Grid>

        {/* YouTube Videos */}
        <Grid mt="xlarge" mb="large">
          <Column>
            <ExternalLink href={YOUTUBE_URL}>
              <YouTubeWordmark />
            </ExternalLink>
          </Column>
        </Grid>
        <Grid mt="large" mb="xlarge" justify="" align="flex-start">
          {ytVideos.map((post, index) => {
            return (
              <React.Fragment key={index}>
                <Column mobileSpaced span={{ medium: 4, large: 4 }}>
                  <YoutubePost post={post.node} />
                </Column>
              </React.Fragment>
            );
          })}
        </Grid>

        {/* CTA Block */}
        <Grid mt="xlarge" mb="xlarge" justify="center">
          <Column textAlign="center">
            <Text size="large" weight="bold">
              For media inquiries, please contact us at{" "}
              <Anchor href="mailto:hello@centrifuge.io">
                hello@centrifuge.io
              </Anchor>
            </Text>
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export const NewsPageQuery = graphql`
  query {
    prs: allPrsYaml {
      edges {
        node {
          title
          link
          thumbnail
          description
        }
      }
    }

    ytVideos: allYtvideosYaml {
      edges {
        node {
          title
          videoId
          description
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
