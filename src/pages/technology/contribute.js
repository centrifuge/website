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
  Image
} from "grommet";

import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import Container from "../../components/Container";
import Grid from "../../components/Grid";
import Column, { Spacer } from "../../components/Column";
import theme from "../../components/Theme/theme";
import { Gitcoin } from "../../components/Icons";
import { ExternalLink } from "../../components/Links";

import { RichTextRenderer } from "../../helpers";

import hof1 from "../../images/hof1.svg";
import hof2 from "../../images/hof2.svg";
import hof3 from "../../images/hof3.svg";
import hof4 from "../../images/hof4.svg";

const HoverBox = styled(Box)`
  transition-property: box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
  &:hover {
    box-shadow: ${theme.global.elevation.light.medium};
  }
`;

const HoFImage = ({ index }) => {
  const images = [hof1, hof2, hof3, hof4];

  return (
    <Image
      src={images[(index = (index + 1) % images.length)]}
      width={120}
      height={120}
    />
  );
};

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
        <Grid align="start" justify="stretch">
          <Column mobileSpaced span={{ medium: 6, large: 3 }}>
            <RichTextRenderer block={page.block1} />
          </Column>
          <Spacer />
          <Column span={{ medium: 6, large: 8 }}>
            <GrommetGrid gap="medium" columns={["1fr", "1fr"]}>
              {page.block1Repos.map(repo => (
                <CardLink link={repo.link}>
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
          </Column>
        </Grid>

        {/* Block 2 */}
        <Grid align="flex-start" justify="stretch">
          <Column mobileSpaced span={{ medium: 6, large: 4 }}>
            <RichTextRenderer block={page.block2} />
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
                    <Text textAlign="left" weight={600} size="large">
                      {bounty.node.title}
                    </Text>
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
                label="Gitcoin"
                href="https://gitcoin.co/explorer?network=mainnet&order_by=-_val_usd_db&org=centrifuge"
              />
            </div>
          </Column>
        </Grid>

        {/* Block Hall Of Fame */}
        <Grid mb="" justify="">
          <Column span={{ medium: 3, large: 3 }}>
            <Heading level="2" lined>
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
                    <HoFImage index={index} />
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
