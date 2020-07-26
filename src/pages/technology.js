import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import {
  Box,
  Text,
  Paragraph,
  Grid as GrommetGrid,
  ResponsiveContext,
  Heading,
  Anchor,
  Button,
} from "grommet";
import { Slack, Github } from "grommet-icons";

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

// const calculateFullBountyValue = (bounty) => {
//   if (bounty.additional_funding_summary.DAI)
//     return (
//       Number(bounty.additional_funding_summary.DAI.amount) +
//       Number(bounty.value_in_usdt_now)
//     ).toFixed(2);
//   return bounty.value_in_usdt_now;
// };

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
    title: "Technology",
    description: null,
  };
  const repos = data.repos.edges;

  return (
    <Layout>
      <SEO {...metadata} />
      <Container>
        {/* Block 1 */}
        <Grid align="start" justify="stretch" mt="xlarge" mb="xlarge">
          <Column mobileSpaced span={{ medium: 6, large: 6 }}>
            <Heading lined margin={{ bottom: "medium" }}>
              Contribute to Centrifuge
            </Heading>
            <Paragraph>
              Centrifuge is open source software. You can find all of our code
              on{" "}
              <Anchor
                href="https://github.com/centrifuge"
                target="_blank"
                rel="noreferrer noopener"
              >
                github.com/centrifuge
              </Anchor>
              .
            </Paragraph>
            <Paragraph>
              We want the community to build on our code: use it, fork it,
              imagine new use cases, suggest improvements.
            </Paragraph>
            <Paragraph>We welcome all contributions!</Paragraph>
            <Box direction="row" gap="large" margin={{ vertical: "small" }}>
              <Button
                plain
                href="https://github.com/centrifuge"
                target="_blank"
                rel="noreferrer noopener"
                icon={<Github />}
                label="GitHub"
              />
              <Button
                plain
                href="https://centrifuge-io.slack.com/join/shared_invite/enQtNDk1MzkwODM4OTgxLWRlNTU4NDQzOWIwYWEzNGRhN2UzMzQwNThjZjI0ZmIxMTU4NmQwMjc2ZDBkOTEyNWJhMjE4MzA2NTE5MWU1NWE"
                target="_blank"
                rel="noreferrer noopener"
                icon={<Slack />}
                label="Slack"
              />
            </Box>
          </Column>
          <Spacer />
          <Column justifySelf="stretch" span={{ medium: 6, large: 4 }}>
            <Animation file={block1Animation} />
          </Column>
        </Grid>

        <Grid mb="xlarge" mt="xlarge">
          <Column>
            <ResponsiveContext.Consumer>
              {(size) => (
                <GrommetGrid
                  fill="horizontal"
                  gap="medium"
                  columns={responsiveGrid.ThreeTwoOne(size)}
                >
                  {repos.map((repo, index) => (
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
          </Column>
        </Grid>

        {/* Block 2 */}
        <Grid mb="xlarge" mt="xlarge">
          <Spacer width={2} />
          <Column span={{ medium: 12, large: 8 }}>
            <Heading lined margin={{ bottom: "medium" }}>
              Code of Conduct
            </Heading>
            <Paragraph>
              Creating a new system for the global financial supply chain is
              only possible through the collaboration of a global ecosystem and
              community of companies, groups, organizations, and individuals. We
              want to come together to exchange ideas and build Centrifuge as an
              inclusive, welcoming, and safe community of collaborators,
              operators, investors, and users. Harmful or discriminating
              behavior by anyone will not be tolerated.
            </Paragraph>
            <Paragraph>
              Community members should be judged by their actions, not criteria
              such as age, race, nationality, sex, sexual orientation, gender,
              gender identity or expression, disability, physical appearance,
              religion (or lack thereof), degrees, geographic location, or
              position.
            </Paragraph>
            <Paragraph>
              We will not tolerate any discriminating behaviour and will keep
              our platforms free from policy violations, either deleting the
              content or hiding it from view.
            </Paragraph>
          </Column>
        </Grid>

        {/* Block 3 */}
        <Grid justify="center" mb="xlarge" mt="xlarge">
          <Spacer width={3} />
          <Column span={{ medium: 12, large: 6 }} textAlign="center">
            <Heading lined>
              Come join our team of experienced, smart, and nice people building
              the future of B2B software!
            </Heading>
            <Button
              primary
              label="Join the Team"
              href="/careers"
              alignSelf="center"
            />
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export const ContributePageQuery = graphql`
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
`;

export default ContributePage;
