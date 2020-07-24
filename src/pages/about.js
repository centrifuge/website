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
   const metadata = {
      title: "About",
      description: null
   };

   const page = data.allContentfulPageAbout.edges[0].node;

   return (
      <Layout>
         <SEO {...metadata} />
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
         </Container>

         <Container>
            {/* Block 3 */}
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
            internalName
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
