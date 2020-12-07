import React from "react";
import styled from "styled-components";
import { StaticQuery, graphql } from "gatsby";
import {
  Box,
  Text,
  Paragraph,
  Grid as GrommetGrid,
  ResponsiveContext,
  Heading,
  Anchor,
  Button
} from "grommet";

import theme from "../Theme/theme";
import { ExternalLink } from "../Links";
import { responsiveGrid } from "../../helpers";

const HoverBox = styled(Box)`
  transition-property: box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
  &:hover {
    box-shadow: ${theme.global.elevation.light.medium};
  }
`;

const CardLink = ({ children, link, ...rest }) => (
  <ExternalLink style={{ textDecoration: "none" }} href={link}>
    <HoverBox
      fill="vertical"
      round="xsmall"
      elevation="small"
      pad={{ left: "medium", vertical: "medium", right: "large" }}
      background="white"
      {...rest}
    >
      {children}
    </HoverBox>
  </ExternalLink>
);

const Repos = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          repos: allReposYaml {
            edges {
              node {
                link
                name
                description
              }
            }
          }
        }
      `}
      render={data => (
        <ResponsiveContext.Consumer>
          {size => (
            <GrommetGrid
              fill="horizontal"
              gap="medium"
              columns={responsiveGrid.ThreeTwoOne(size)}
            >
              {data.repos.edges.map((repo, index) => (
                <CardLink key={index} link={repo.node.link}>
                  <div>
                    <Text weight={600} size="large">
                      {repo.node.name}
                    </Text>
                    <Paragraph margin={{ bottom: "none" }}>
                      {repo.node.description}
                    </Paragraph>
                  </div>
                </CardLink>
              ))}
            </GrommetGrid>
          )}
        </ResponsiveContext.Consumer>
      )}
    />
  );
};

export default Repos;
