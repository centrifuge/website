import React from "react";
import { graphql } from "gatsby";
import { Heading, Button, Image } from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column, { Spacer } from "../components/Column";
import Animation from "../components/Animation";
import FullWidthImage from "../components/FullWidthImage";
import DeepLink from "../components/DeepLink";
import { RichTextRenderer } from "../helpers";
import { ProvidedFunctionality, BuildItem } from "../components/GetStarted";

import imgGetStarted1 from "../images/getstarted/getstarted1.png";
import imgGetStarted3 from "../images/getstarted/getstarted3.png";
import imgGetStartedItem1 from "../images/getstarted/getstarted_item1.png";
import imgGetStartedItem2 from "../images/getstarted/getstarted_item2.png";
import imgGetStartedItem3 from "../images/getstarted/getstarted_item3.png";
import imgGetStartedItem4 from "../images/getstarted/getstarted_item4.png";
import imgGetStartedItem5 from "../images/getstarted/getstarted_item5.png";
import imgGetStartedItem6 from "../images/getstarted/getstarted_item6.png";

const block1 = {
	"contentAST": {
		"data": {},
		"content": [
			{
				"data": {},
				"content": [
					{
						"data": {},
						"marks": [],
						"value": "How to get started building on Centrifuge",
						"nodeType": "text"
					}
				],
				"nodeType": "heading-1"
			},
			{
				"data": {},
				"content": [
					{
						"data": {},
						"marks": [],
						"value": "Welcome! 👋 We’re thrilled you’re here. Are you a developer, a business partner, a financial organization, a technology provider, Fintech or DeFi player? This is the right place for you..",
						"nodeType": "text"
					}
				],
				"nodeType": "paragraph"
			}
		],
		"nodeType": "document"
	}
}
const block2 = [
	{
		"functionality": {
			"logo": {
				"file": {
					"url": imgGetStartedItem1,
					"fileName": "sap-io.png"
				}
			}
		},
		"functionalityTitle": "Connect with other businesses",
		"functionalitySummary": {
			"functionalitySummary": "Map your supplier/ buyer relationships and transaction history."
		}
	},
	{
		"functionality": {
			"logo": {
				"file": {
					"url": imgGetStartedItem2,
					"fileName": "techchrunch.svg"
				}
			}
		},
		"functionalityTitle": "Blockchain company Centrifuge wants every business to get paid on time",
		"functionalitySummary": {
			"functionalitySummary": "Centrifuge allows you to create, upload and exchange Purchase Orders and Invoices with your network."
		}
	},
	{
		"functionality": {
			"logo": {
				"file": {
					"url": imgGetStartedItem3,
					"fileName": "scfbriefing.jpeg"
				}
			}
		},
		"functionalityTitle": "Notarized document exchange on Ethereum",
		"functionalitySummary": {
			"functionalitySummary": "Transaction data is anchored on Ethereum for an unalterable, single source of truth and time-stamp for the documents."
		}
  },
	{
		"functionality": {
			"logo": {
				"file": {
					"url": imgGetStartedItem4,
					"fileName": "sap-io.png"
				}
			}
		},
		"functionalityTitle": "Connect with other businesses",
		"functionalitySummary": {
			"functionalitySummary": "Map your supplier/ buyer relationships and transaction history."
		}
	},
	{
		"functionality": {
			"logo": {
				"file": {
					"url": imgGetStartedItem5,
					"fileName": "techchrunch.svg"
				}
			}
		},
		"functionalityTitle": "Exchange Business documents",
		"functionalitySummary": {
			"functionalitySummary": "Centrifuge allows you to create, upload and exchange Purchase Orders and Invoices with your network."
		}
	},
	{
		"functionality": {
			"logo": {
				"file": {
					"url": imgGetStartedItem6,
					"fileName": "scfbriefing.jpeg"
				}
			}
		},
		"functionalityTitle": "Notarized document exchange on Ethereum",
		"functionalitySummary": {
			"functionalitySummary": "Transaction data is anchored on Ethereum for an unalterable, single source of truth and time-stamp for the documents."
		}
	}  
]
const block3 = {
	"contentAST": {
		"data": {},
		"content": [
			{
				"data": {},
				"content": [
					{
						"data": {},
						"marks": [],
						"value": "What can I build with Centrifuge? ",
						"nodeType": "text"
					}
				],
				"nodeType": "heading-2"
			},
			{
				"data": {},
				"content": [
					{
						"data": {},
						"marks": [],
						"value": "Start building powerful dApps on Centrifuge. If you're searching for ideas to explore, look no further.",
						"nodeType": "text"
					}
				],
				"nodeType": "paragraph"
			}
		],
		"nodeType": "document"
	}
}
const block4 = {
	"contentAST": {
		"data": {},
		"content": [
			{
				"data": {},
				"content": [
					{
						"data": {},
						"marks": [],
						"value": "For Corporates",
						"nodeType": "text"
					}
				],
				"nodeType": "heading-1"
			},
			{
				"data": {},
				"content": [
					{
						"data": {},
						"marks": [],
						"value": "Start building powerful dApps on Centrifuge. If you're searching for ideas to explore, look no further.",
						"nodeType": "text"
					}
				],
				"nodeType": "paragraph"
			},
			{
				"data": {},
				"content": [
					{
						"data": {},
						"content": [
							{
								"data": {},
								"content": [
									{
										"data": {},
										"marks": [],
										"value": "Download the latest Centrifuge Node and Ethereum Smart contract addresses",
										"nodeType": "text"
									}
								],
								"nodeType": "paragraph"
							}
						],
						"nodeType": "list-item"
					},
					{
						"data": {},
						"content": [
							{
								"data": {},
								"content": [
									{
										"data": {},
										"marks": [],
										"value": "Read the developer documentation ",
										"nodeType": "text"
									}
								],
								"nodeType": "paragraph"
							}
						],
						"nodeType": "list-item"
					},
					{
						"data": {},
						"content": [
							{
								"data": {},
								"content": [
									{
										"data": {},
										"marks": [],
										"value": "Start submitting your invoices",
										"nodeType": "text"
									}
								],
								"nodeType": "paragraph"
							}
						],
						"nodeType": "list-item"
					}
				],
				"nodeType": "unordered-list"
			},
			{
				"data": {},
				"content": [
					{
						"data": {},
						"marks": [],
						"value": "",
						"nodeType": "text"
					}
				],
				"nodeType": "paragraph"
			},
			{
				"data": {
					"target": {
						"sys": {
							"space": {
								"sys": {
									"type": "Link",
									"linkType": "Space",
									"id": "pvsr19vg7gf2"
								}
							},
							"type": "Entry",
							"id": "c1c9XmMGLilyZfhgpu0F2py",
							"contentType": {
								"sys": {
									"type": "Link",
									"linkType": "ContentType",
									"id": "componentButton"
								}
							},
							"revision": 4,
							"createdAt": "2019-01-31T17:04:04.241Z",
							"updatedAt": "2019-02-06T10:08:30.124Z",
							"environment": {
								"sys": {
									"id": "master",
									"type": "Link",
									"linkType": "Environment"
								}
							}
						},
						"fields": {
							"internalName": {
								"en-US": "[Download Whitepaper](/centrifuge_os_white_paper.pdf) - Plain"
							},
							"text": {
								"en-US": "Download Whitepaper"
							},
							"link": {
								"en-US": "/centrifuge_os_white_paper.pdf"
							},
							"buttonStyle": {
								"en-US": "Plain"
							}
						}
					}
				},
				"content": [],
				"nodeType": "embedded-entry-block"
			},
			{
				"data": {},
				"content": [
					{
						"data": {},
						"marks": [],
						"value": "",
						"nodeType": "text"
					}
				],
				"nodeType": "paragraph"
			}			

		],
		"nodeType": "document"
	}
}

const GetStartedPage = ({ data }) => {
  const page = data.allContentfulPageEcosystem.edges[0].node;

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
            <RichTextRenderer block={block1} />
          </Column>
          <Column></Column>
          <Spacer />
        </Grid>

        <Grid mb="" justify="">
          <Column span={{ medium: 6, large: 4 }}>
            <Heading lined level="2">
              What functionality does the protocol provide?
            </Heading>
          </Column>
        </Grid>

        {/* Block 2 */}
        <Grid noMargin align="start">
          {block2.map((functionality, index) => (
            <React.Fragment key={index}>
              <Column span={{ medium: 1 }} />
              <Column mobileSpaced span={{ medium: 5, large: 3 }}>
                <ProvidedFunctionality functionality={functionality} />
              </Column>
            </React.Fragment>
          ))}
        </Grid>

        {/* Block 3 */}        
        <Grid mb="xlarge" justify="">
          <Column span={{ medium: 6, large: 6 }}>
            <DeepLink id="use-cases">
              <RichTextRenderer block={block3} />
              <Button plain target="_blank" rel="noopener noreferrer" href={'#'}>
                See our Usecases
              </Button>
            </DeepLink>
          </Column>
        </Grid>
        {/* Build Item Container For Mobile Responsive */}
        <BuildItem blocks={page.block4} />
        <FullWidthImage src={imgGetStarted3}/>

        {/* Block 4 */}        
        <Grid>
          <Column mediumSpaced span={{ medium: 9, large: 4 }}>
            <RichTextRenderer block={block4} />
          </Column>
          <Column span={{ medium: 3, large: 2 }}/>
          <Column span={{ medium: 3, large: 2 }}/>
          <Column mediumSpaced span={{ medium: 9, large: 4 }}>
            <RichTextRenderer block={block4} />
          </Column>
        </Grid>
      </Container>      
    </Layout>
  );
};

export const GetStartedPageQuery = graphql`
  query {
    allContentfulPageEcosystem {
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
            content {
              contentAST
            }
          }
          block3 {
            contentAST
          }
          block4 {
            content {
              contentAST
            }
          }
          block5 {
            contentAST
          }
        }
      }
    }
  }
`;

export default GetStartedPage;
