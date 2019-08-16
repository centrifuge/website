import React from "react";
import { graphql } from "gatsby";
import { Button, Image } from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column, { Spacer } from "../components/Column";
import FullWidthImage from "../components/FullWidthImage";
import DeepLink from "../components/DeepLink";
import { RichTextRenderer } from "../helpers";
import { ProvidedFunctionality, BuildItem } from "../components/GetStarted";

import imgGetStarted1 from "../images/getstarted/getstarted1.png";
import imgGetStarted3 from "../images/getstarted/getstarted3.png";

const GetStartedPage = ({ data }) => {
  const page = data.allContentfulPageGetStarted.edges[0].node;
  return (
    <Layout>
      <SEO {...page.seo} />
      <Container>
        {/* Block 1 */}
        <Grid>
          <Column span={{medium:6, large: 1}} mediumOrder={1} />
          <Column mediumSpaced span={{ medium: 8, large: 6 }} mediumOrder={4}>
            {/* <Animation file={block1Animation} /> */}
            <Image style={{width: '100%'}} src={imgGetStarted1}/>
          </Column>
          <Column span={{medium:2}} mediumOrder={3} />
          <Column  mediumSpaced span={{ medium: 6, large: 4 }} mediumOrder={2}>
            <RichTextRenderer block={page.block1} />
          </Column>
          <Column></Column>
          <Spacer />
        </Grid>

				{/* Block 2 */}
        <Grid mb="" justify="">
          <Column span={{ medium: 6, large: 4 }}>
						<RichTextRenderer block={page.block2} />          
					</Column>
        </Grid>

        {/* Block 3 */}
        <Grid noMargin align="start">
          {page.block3.map((functionality, index) => (
            <React.Fragment key={index}>
              <Column span={{ medium: 1 }} />
              <Column mobileSpaced span={{ medium: 5, large: 3 }}>
                <ProvidedFunctionality functionality={functionality} />
              </Column>
            </React.Fragment>
          ))}
        </Grid>

        {/* Block 4 */}        
        <Grid mb="xlarge" justify="">
          <Column span={{ medium: 6, large: 6 }}>
            <DeepLink id="use-cases">
              <RichTextRenderer block={page.block4} />
              <Button plain target="_blank" rel="noopener noreferrer" href={'/ecosystem/#use-cases'}>
                See our Usecases
              </Button>
            </DeepLink>
          </Column>
        </Grid>

				{/* Block 5 */}        
        {/* Build Item Container For Mobile Responsive */}
        <BuildItem blocks={page.block5} />
        <FullWidthImage src={imgGetStarted3}/>

        {/* Block 6 */}        
        <Grid align="start">
          <Column mediumSpaced span={{ medium: 9, large: 5 }}>
            <RichTextRenderer block={page.block6[0].content} />
          </Column>
          <Column span={{ medium: 3, large: 1 }}/>
          <Column span={{ medium: 3, large: 1 }}/>
          <Column mediumSpaced span={{ medium: 9, large: 5 }}>
            <RichTextRenderer block={page.block6[1].content} />
          </Column>
        </Grid>
      </Container>      
    </Layout>
  );
};

export const GetStartedPageQuery = graphql`
  query {
    allContentfulPageGetStarted {
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
							image {
								file {
									url
									fileName
								}
							}
							functionality {
								contentAST
							}
          }
          block4 {
            contentAST
          }
          block5 {
            content {
              contentAST
            }
          }
          block6 {
            content {
              contentAST
            }
          }
        }
      }
    }
  }
`;

export default GetStartedPage;
