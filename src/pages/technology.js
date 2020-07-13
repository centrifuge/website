import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import {
  Box,
  Text,
  Paragraph,
  Grid as GrommetGrid,
  ResponsiveContext,
} from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column, { Spacer } from "../components/Column";
import Animation from "../components/Animation";
import theme from "../components/Theme/theme";
import { ExternalLink } from "../components/Links";

import { RichTextRenderer, responsiveGrid } from "../helpers";

import block1Animation from "../lottie/Ecosystem_Q.json";

const HoverBox = styled(Box)`
  transition-property: box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
  &:hover {
    box-shadow: ${theme.global.elevation.light.medium};
  }
`;

const calculateFullBountyValue = (bounty) => {
  if (bounty.additional_funding_summary.DAI)
    return (
      Number(bounty.additional_funding_summary.DAI.amount) +
      Number(bounty.value_in_usdt_now)
    ).toFixed(2);

  return bounty.value_in_usdt_now;
};

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

const ContributePage = ({ data }) => {
  const metadata = {
    title: "Contribute",
    description: null,
  };

  const page = data.allContentfulPageTechnologyContribute.edges[0].node;

  return (
    <Layout>
      <SEO {...metadata} />
      <Container>
        {/* Block 1 */}
        <Grid align="start" justify="stretch" mb="xlarge">
          <Column mobileSpaced span={{ medium: 6, large: 6 }}>
            <RichTextRenderer block={page.block1} />
          </Column>
          <Spacer />
          <Column justifySelf="stretch" span={{ medium: 6, large: 4 }}>
            <Animation file={block1Animation} />
          </Column>
        </Grid>

        {/* Block 1.5 */}
        <Grid mt="">
          <Column>
            <ResponsiveContext.Consumer>
              {(size) => (
                <GrommetGrid
                  fill="horizontal"
                  gap="medium"
                  columns={responsiveGrid.ThreeTwoOne(size)}
                >
                  {page.block1Repos.map((repo, index) => (
                    <CardLink key={index} link={repo.link}>
                      <div>
                        <Text weight={600} size="large">
                          {repo.name}
                        </Text>
                        <Paragraph margin={{ bottom: "none" }}>
                          {repo.description}
                        </Paragraph>
                      </div>
                    </CardLink>
                  ))}
                </GrommetGrid>
              )}
            </ResponsiveContext.Consumer>
          </Column>
        </Grid>

        {/* Block 2 */}
        <Grid>
          <Spacer width={2} />
          <Column span={{ medium: 12, large: 8 }}>
            <RichTextRenderer block={page.block3} />
          </Column>
        </Grid>

        {/* Block 3 */}
        <Grid justify="center">
          <Spacer width={3} />
          <Column span={{ medium: 12, large: 6 }} textAlign="center">
            <RichTextRenderer block={page.block4} />
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export const ContributePageQuery = graphql`
  query {
    allContentfulPageTechnologyContribute {
      edges {
        node {
          block1 {
            contentAST
          }
          block1Repos {
            name
            description
            link
          }
          block2 {
            contentAST
          }
          block3 {
            contentAST
          }
          block4 {
            contentAST
          }
        }
      }
    }
  }
`;

export default ContributePage;
