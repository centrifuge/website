import React from "react";
import { Box, Button } from "grommet";
import { graphql, useStaticQuery } from "gatsby";

import { LatestNews } from "../../components/News";

const LatestNewsSection = () => {
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

  const mediumPosts = data.mediumFeed.posts?.slice(0, 3);
  return (
    <Box>
      <LatestNews posts={mediumPosts} />
      <Box align="center">
        <Button primary href="/news" label="More news" />
      </Box>
    </Box>
  );
};

export default LatestNewsSection;
