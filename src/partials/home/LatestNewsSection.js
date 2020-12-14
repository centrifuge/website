import React from "react";
import { Box, Button, Heading } from "grommet";
import { graphql, useStaticQuery } from "gatsby";

import { Section, Row, Col } from "../../components/MDXLayout/shortcodes";
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

  const mediumPosts = data.mediumFeed.posts.slice(0, 3);
  return (
    <Section>
      <Row>
        <Col span={4}>
          <Heading lined level={1}>
            Latest News
          </Heading>
        </Col>
      </Row>
      <Box>
        <LatestNews posts={mediumPosts} />
        <Box align="center">
          <Button primary href="/news" label="More news" />
        </Box>
      </Box>
    </Section>
  );
};

export default LatestNewsSection;
