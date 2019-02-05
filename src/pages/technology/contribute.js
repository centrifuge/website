import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import {
  Box,
  Text,
  Button,
  Paragraph,
  Heading,
  Grid as GrommetGrid
} from "grommet";

import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import Column, { Spacer } from "../../components/Column";
import theme from "../../components/Theme/theme";

import { RichTextRenderer } from "../../helpers";
import { ExternalLink } from "../../components/Links";

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

  const { totalCount, edges } = data.allLambdaGitcoinOpenBounties;
  const bountiesCount = totalCount;
  const openBounties = edges;

  const hallOfFame = data.allLambdaGitcoinHallOfFame;

  const {
    compensationPaid,
    bountiesCompleted
  } = data.allLambdaGitcoinCompletedBounties.edges[0].node;

  return (
    <Layout>
      <SEO {...page.seo} />
      <Container>
        {/* Block 1 */}
        <Grid align="start" justify="stretch">
          <Column span={{ medium: 6, large: 3 }}>
            <RichTextRenderer block={page.block1} />
          </Column>
          <Spacer />
          <Column span={{ medium: 6, large: 8 }}>
            <GrommetGrid gap="medium" columns={["1fr", "1fr"]}>
              {page.block1Repos.map(repo => (
                <CardLink link={repo.link}>
                  <div>
                    <Button link plain label={repo.name} />
                    <Paragraph margin={{ bottom: "none" }}>
                      {repo.description}
                    </Paragraph>
                  </div>
                </CardLink>
              ))}
            </GrommetGrid>
          </Column>
        </Grid>

        {/* Block 2 */}
        <Grid align="flex-start" justify="stretch">
          <Column span={{ medium: 6, large: 4 }}>
            <RichTextRenderer block={page.block2} />
            <Box direction="row" margin={{ top: "large" }} justify="between">
              <div>
                <Heading margin={{ bottom: "none" }} level="2">
                  {bountiesCompleted}
                </Heading>
                <Text>Bounties Completed</Text>
              </div>
              <div>
                <Heading margin={{ bottom: "none" }} level="2">
                  ${compensationPaid.toFixed(2)}
                </Heading>
                <Text>Compensation Paid</Text>
              </div>
            </Box>
          </Column>

          <Spacer width={2} />

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
                    <Button
                      textAlign="left"
                      link
                      plain
                      label={bounty.node.title}
                    />
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
                label="Gitcoin"
                href="https://gitcoin.co/explorer?network=mainnet&order_by=-_val_usd_db&org=centrifuge"
              />
            </div>
          </Column>
        </Grid>

        {/* Block Hall Of Fame */}
        {/* <Grid mb="" justify="">
          <Column span={{ medium: 3, large: 3 }}>
            <Heading level="2" lined>
              Hall of Fame
            </Heading>
          </Column>
        </Grid>
        <Grid mt="" align="center" justify="center" /> */}

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
    allLambdaGitcoinOpenBounties(filter: { title: { ne: null } }) {
      totalCount
      edges {
        node {
          status
          title
          url
          value_in_usdt_now
        }
      }
    }
    allLambdaGitcoinHallOfFame(filter: { name: { ne: null } }) {
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
