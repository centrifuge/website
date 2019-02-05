import React from "react";
import { graphql } from "gatsby";
import { Heading, Image, Box, Grid as GrommetGrid } from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column, { Spacer } from "../components/Column";
import VIP from "../components/VIP";
import FullWidthImage from "../components/FullWidthImage";
import DeepLink from "../components/DeepLink";
import Animation from "../components/Animation";

import { RichTextRenderer, lastInArray } from "../helpers";

import about from "../lottie/About.json";
import aboutBig from "../images/about_big.svg";
import { ExternalLink } from "../components/Links";

const AboutPage = ({ data }) => {
  const page = data.allContentfulPageAbout.edges[0].node;

  return (
    <Layout>
      <SEO {...page.seo} />
      <Container>
        {/* Block 1 */}
        <Grid>
          <Column span={{ medium: 6, large: 6 }}>
            <RichTextRenderer block={page.block1} />
          </Column>
          <Spacer />
          <Column justifySelf="stretch" span={{ medium: 6, large: 4 }}>
            <Animation file={about} />
          </Column>
        </Grid>

        {/* Block 2 */}
        <Grid>
          <Spacer width={4} />
          <Column span={{ medium: 12, large: 8 }}>
            <DeepLink id="mission">
              <RichTextRenderer block={page.block2} />
            </DeepLink>
          </Column>
        </Grid>

        {/* Block 3 */}

        <Grid justify="center" align="center">
          <Column span={{ medium: 12, large: 4 }}>
            <DeepLink id="partners">
              <RichTextRenderer block={page.block3} />
            </DeepLink>
          </Column>
          <Spacer />
          <Column span={{ medium: 12, large: 6 }}>
            <GrommetGrid
              fill
              gap={{ row: "large", column: "xlarge" }}
              columns={["flex", "flex"]}
              rows={["flex", "flex"]}
            >
              {page.block3Partners.map((partner, index) => (
                <Box key={index}>
                  <Image
                    style={{ maxWidth: 180 }}
                    fit="contain"
                    alt={partner.name}
                    src={partner.logo.file.url}
                  />
                </Box>
              ))}
            </GrommetGrid>
          </Column>
        </Grid>

        {/* Block 4 - Team */}
        <Grid mb="" justify="">
          <Column span={{ medium: 3, large: 3 }}>
            <DeepLink id="team">
              <Heading level="2" lined>
                Our team
              </Heading>
            </DeepLink>
          </Column>
        </Grid>
        <Grid mt="" align="start">
          {page.block4Team.map((member, index) => {
            return (
              <Column
                key={index}
                justifySelf="center"
                span={{ medium: 6, large: 3 }}
                margin={{ bottom: "large" }}
              >
                <VIP {...member} />
              </Column>
            );
          })}
        </Grid>
      </Container>

      {/* Image */}
      <FullWidthImage src={aboutBig} />

      <Container>
        {/* Block 5 - Advisors */}
        <Grid mb="" justify="">
          <Column span={{ medium: 3, large: 3 }}>
            <Heading level="2" lined>
              Advisory Board
            </Heading>
          </Column>
        </Grid>
        <Grid mt="" align="start">
          {page.block5Advisors.map((advisor, index) => {
            return (
              <Column
                key={index}
                justifySelf="center"
                span={{ medium: 6, large: 3 }}
                margin={{ bottom: "large" }}
              >
                <VIP {...advisor} />
              </Column>
            );
          })}
        </Grid>

        {/* Block 6 - Investors */}
        <Grid mb="" justify="">
          <Column span={{ medium: 3, large: 3 }}>
            <Heading level="2" lined>
              Investors
            </Heading>
          </Column>
        </Grid>
        <Grid mt="" align="center" justify="center">
          <Spacer width={2} />
          {page.block6Investors.map((investor, index) => {
            return (
              <React.Fragment key={index}>
                <Column span={{ medium: 4, large: 2 }}>
                  <ExternalLink href={investor.articleLink}>
                    <Box align="center" margin={{ bottom: "large" }}>
                      <Image
                        style={{ maxWidth: "100%", width: 160 }}
                        alt={investor.internalName}
                        src={investor.logoMonotone.file.url}
                      />
                    </Box>
                  </ExternalLink>
                </Column>
                {!lastInArray(page.block6Investors, index) && <Spacer />}
              </React.Fragment>
            );
          })}
        </Grid>

        {/* Block 7 */}
        <Grid justify="center">
          <Spacer width={3} />
          <Column span={{ medium: 12, large: 6 }} textAlign="center">
            <RichTextRenderer block={page.block7} />
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export const AboutPageQuery = graphql`
  query {
    allContentfulPageAbout {
      edges {
        node {
          seo {
            title
            description
          }
          block1 {
            contentAST
          }
          block2 {
            contentAST
          }
          block3 {
            contentAST
          }
          block3Partners {
            name
            logo {
              file {
                url
              }
            }
          }
          block4Team {
            headshot {
              fixed(width: 128, height: 128, quality: 80) {
                ...GatsbyContentfulFixed_withWebp
              }
            }
            name
            title
            socialMediaTwitter
            socialMediaLinkedIn
            socialMediaGitHub
            socialMediaMedium
          }
          block5Advisors {
            headshot {
              fixed(width: 128, height: 128, quality: 80) {
                ...GatsbyContentfulFixed_withWebp
              }
            }
            name
            title
            socialMediaTwitter
            socialMediaLinkedIn
            socialMediaGitHub
            socialMediaMedium
          }
          block6Investors {
            internalName
            articleLink
            logoMonotone {
              file {
                url
              }
            }
          }
          block7 {
            contentAST
          }
        }
      }
    }
  }
`;

export default AboutPage;
