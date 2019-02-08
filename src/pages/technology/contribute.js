import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import {
  Box,
  Text,
  Button,
  Paragraph,
  Heading,
  Grid as GrommetGrid,
  Image,
  ResponsiveContext
} from "grommet";

import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import Column, { Spacer } from "../../components/Column";
import Animation from "../../components/Animation";
import theme from "../../components/Theme/theme";
import { Gitcoin } from "../../components/Icons";
import { ExternalLink } from "../../components/Links";
import Tag from "../../components/Tag";

import { RichTextRenderer, responsiveGrid } from "../../helpers";

import block1Animation from "../../lottie/Ecosystem.json";

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

const ContributePage = ({ data }) => {
  const page = data.allContentfulPageTechnologyContribute.edges[0].node;

  const openBounties = data.allLambdaGitcoinOpenBounties.edges;

  const hallOfFame = data.allLambdaGitcoinHallOfFame.edges;

  const {
    compensationPaid,
    bountiesCompleted
  } = data.allLambdaGitcoinCompletedBounties.edges[0].node;

  return (
    <Layout>
      <SEO {...page.seo} />
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
              {size => (
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
        <Grid align="flex-start" justify="stretch">
          <Column mobileSpaced span={{ medium: 6, large: 4 }}>
            <RichTextRenderer block={page.block2} />

            {/* Gitcoin Stats */}
            <Box direction="row" margin={{ top: "large" }} justify="between">
              <Box>
                <Heading margin={{ bottom: "none" }} level="2">
                  {bountiesCompleted}
                </Heading>
                <Text>Bounties Completed</Text>
              </Box>
              <Box>
                <Heading margin={{ bottom: "none" }} level="2">
                  ${compensationPaid.toFixed(2)}
                </Heading>
                <Text>Compensation Paid</Text>
              </Box>
            </Box>
          </Column>

          <Spacer width={2} />

          {/* Bounties */}
          <Column span={{ medium: 6, large: 6 }}>
            <Box
              fill="horizontal"
              direction="column"
              gap="medium"
              margin={{ bottom: "large" }}
            >
              {openBounties.map(bounty => (
                <CardLink
                  link={bounty.node.url}
                  direction="row"
                  justify="between"
                  align="center"
                >
                  <Box basis="3/4">
                    <Text textAlign="start" weight={600} size="large">
                      {bounty.node.title}{" "}
                      <Tag background={bounty.node.bounty_type}>
                        {bounty.node.bounty_type}
                      </Tag>{" "}
                    </Text>
                    <Box margin={{ top: "small" }}>
                      <div>
                        <Box
                          as="span"
                          style={{ display: "inline-flex" }}
                          margin={{ right: "xsmall" }}
                          height="8px"
                          width="8px"
                          round="full"
                          background={bounty.node.status}
                        />
                        <Text
                          weight={600}
                          style={{ textTransform: "capitalize" }}
                        >
                          {bounty.node.status}
                        </Text>
                      </div>
                    </Box>
                  </Box>
                  <Box basis="1/4" align="end">
                    <Text weight="600">${bounty.node.value_in_usdt_now}</Text>
                  </Box>
                </CardLink>
              ))}
            </Box>
            <div>
              <Button
                plain
                icon={<Gitcoin />}
                label="See all Gitcoin bounties"
                href="https://gitcoin.co/explorer?network=mainnet&order_by=-_val_usd_db&org=centrifuge"
              />
            </div>
          </Column>
        </Grid>

        {/* Block Hall Of Fame */}
        <Grid mb="" justify="">
          <Column span={{ medium: 3, large: 3 }}>
            <Heading level="3" lined>
              Hall of Fame
            </Heading>
          </Column>
        </Grid>
        <Grid mt="">
          {hallOfFame.map((famous, index) => {
            return (
              <React.Fragment key={index}>
                <Spacer />
                <Column mobileSpaced span={{ medium: 6, large: 2 }}>
                  <Box align="center">
                    <Image
                      src={`https://gitcoin.co/dynamic/avatar/${
                        famous.node.name
                      }/`}
                      alt={`${famous.node.name} avatar`}
                      width={96}
                      height={96}
                      style={{ borderRadius: 96 / 2 }}
                    />
                    <Text margin={{ top: "small" }} weight={600} size="large">
                      {famous.node.name}
                    </Text>
                    <Text margin={{ bottom: "small" }}>
                      {famous.node.count} bounties
                    </Text>
                    <ExternalLink
                      href={`https://gitcoin.co/profile/${famous.node.name}`}
                    >
                      <Gitcoin />
                    </ExternalLink>
                  </Box>
                </Column>
              </React.Fragment>
            );
          })}
        </Grid>

        {/* Block 3 */}
        <Grid>
          <Spacer width={4} />
          <Column span={{ medium: 12, large: 8 }}>
            <RichTextRenderer block={page.block3} />
          </Column>
        </Grid>

        {/* Block 4 */}
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
          seo {
            title
          }
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
    allLambdaGitcoinOpenBounties(
      filter: { title: { ne: null } }
      sort: { fields: status, order: ASC }
    ) {
      totalCount
      edges {
        node {
          status
          bounty_type
          title
          url
          value_in_usdt_now
        }
      }
    }
    allLambdaGitcoinHallOfFame(
      filter: { name: { ne: null } }
      sort: { fields: count, order: DESC }
    ) {
      edges {
        node {
          name
          count
        }
      }
    }
    allLambdaGitcoinCompletedBounties(
      filter: { compensationPaid: { ne: null } }
    ) {
      edges {
        node {
          compensationPaid
          bountiesCompleted
        }
      }
    }
  }
`;

export default ContributePage;
