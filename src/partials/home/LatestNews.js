import React from "react";
import { Heading, Box, Button } from "grommet";
import { graphql, useStaticQuery } from "gatsby";

import Column from "../../components/Column";
import Grid from "../../components/Grid";
import { LatestNews as LatestNewsComponent } from "../../components/News";

const LatestNews = () => {
  const data = useStaticQuery(graphql`
    query {
      mediumFeed: lambdaMediumPosts {
        posts: items {
          title
          link
          thumbnail
          description
        }
      }
    }
  `);
  const mediumPosts = data.mediumFeed.posts.slice(0, 3);
  return (
    <Grid staggered mt="" mb="large">
      <Column>
        <LatestNewsComponent posts={mediumPosts} />
        <Box align="center">
          <Button primary href="/news" label="More news" />
        </Box>
      </Column>
    </Grid>
  );
};

export default LatestNews;
