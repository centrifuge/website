import React from 'react'
import {
  Box,
  Button,
  Heading,
  Paragraph,
  Text,
  ResponsiveContext
} from 'grommet'

import Grid from 'components/Grid'
import Container from 'components/Container'

import Step from './Step'
import Image from './Image'
import Slider from './Slider'
import Collapse from './Collapse'
import VerticalSteps from './VerticalSteps'

import graph_how_it_works_desktop_img from 'images/deep-tier-finance/graph_how_it_works_desktop.svg'
import graph_how_it_works_desktop_detailed_img from 'images/deep-tier-finance/graph_how_it_works_desktop_detailed.svg'
import graph_how_it_works_mobile_img from 'images/deep-tier-finance/graph_how_it_works_mobile.svg'
import graph_how_it_works_mobile_detailed_img from 'images/deep-tier-finance/graph_how_it_works_mobile_detailed.svg'

export default function HowDoesDTFWork() {
  const [is_more_details_open, set_is_more_details_open] = React.useState()

  const onMoreDetailsClick = () => {
    set_is_more_details_open(!is_more_details_open)
  }

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <>
          <Box pad={{ top: '144px' }}>
            <Container>
              <Heading level={2} lined>
                {data.heading}
              </Heading>

              {data.paragraphs.map((paragraph, i) => (
                <Paragraph key={`HowDoesDTFWork-paragraph-${i}`}>
                  {paragraph}
                </Paragraph>
              ))}
            </Container>
          </Box>

          <Container>
            {size === 'small' ? (
              <Box pad={{ top: '60px' }} style={{ position: 'relative' }}>
                <Text
                  style={{
                    position: 'absolute',
                    top: '45%',
                    width: '30%',
                    background: 'white',
                    padding: '20px 0'
                  }}
                >
                  {data.aboveImage}
                </Text>
                <img
                  src={graph_how_it_works_mobile_img}
                  style={{ margin: '0 15%' }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    top: '45%',
                    width: '30%',
                    right: 0,
                    background: 'white',
                    padding: '20px 0'
                  }}
                >
                  {data.belowImage}
                </Text>
              </Box>
            ) : (
              <Box pad={{ top: '144px' }} align='center'>
                <Text style={{ marginBottom: 12 }}>{data.aboveImage}</Text>
                <img src={graph_how_it_works_desktop_img} />
                <Text style={{ marginTop: 12 }}>{data.belowImage}</Text>
              </Box>
            )}
          </Container>

          <Box pad={{ top: '60px' }} align='center'>
            <Button
              onClick={onMoreDetailsClick}
              type='button'
              primary
              alignSelf='center'
              style={{
                fontSize: 16,
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 52,
                paddingRight: 52
              }}
              label={is_more_details_open ? 'Less Details' : 'More Details'}
            />

            <Collapse isOpen={is_more_details_open}>
              {size === 'small' ? (
                <Slider
                  data={data}
                  image={graph_how_it_works_desktop_detailed_img}
                />
              ) : size === 'medium' ? (
                <VerticalSteps>
                  <div>
                    {data.aboveSteps.map((step, i) => (
                      <div key={`HowDoesDTFWork-aboveSteps-${i}`}>{step}</div>
                    ))}
                  </div>
                  <div>
                    <Image src={graph_how_it_works_mobile_detailed_img} />
                  </div>
                  <div>
                    {data.belowSteps.map((step, i) => (
                      <div key={`HowDoesDTFWork-aboveSteps-${i}`}>{step}</div>
                    ))}
                  </div>
                </VerticalSteps>
              ) : (
                <>
                  <Grid noMargin>
                    {data.aboveSteps.map((step, i) => (
                      <Step
                        span={{ medium: 3, large: 3 }}
                        key={`HowDoesDTFWork-aboveSteps-${i}`}
                      >
                        {step}
                      </Step>
                    ))}
                  </Grid>

                  <Image src={graph_how_it_works_desktop_detailed_img} />

                  <Grid noMargin>
                    {data.belowSteps.map((step, i) => (
                      <Step
                        span={{ medium: 3, large: 3 }}
                        key={`HowDoesDTFWork-aboveSteps-${i}`}
                      >
                        {step}
                      </Step>
                    ))}
                  </Grid>
                </>
              )}
            </Collapse>
          </Box>
        </>
      )}
    </ResponsiveContext.Consumer>
  )
}

const data = {
  heading: 'How does Deep Tier Finance work?',
  paragraphs: [
    'Through the use of Centrifuge OS, an open blockchain protocol for supply chains, suppliers will be able to easily prove their credit-worthiness as they build a reputation with their customers over time, and this, in turn, will help to obtain financing. In addition, the trust and reputation of large companies ripple down the supply chain through interconnected business relations. Business sensitive information is selectively shared and verified immutably on-chain.',
    'Imagine a simplified sneaker supply chain, from a Cotton Grower to a large Sneaker producer. Products are being delivered and invoices issued constantly throughout the supply chain. There is also an external “Funder” such as a factor. All entities are connected by the decentralized Centrifuge OS and share selected, encrypted data, such as outstanding amounts and due dates readable only to the next intermediary in the chain. No sensible data, such as materials or quantities are revealed - companies retain full sovereignty over their data.',
    'Cotton Grower sends an early payment request to Fabric. This request is matched with outstanding amounts between Fabric and Laces and passed through the supply chain until it reaches Sneaker. Sneaker, can either finance the request from their excess liquidity (Dynamic Discounting approach) or confirm their willingness to pay their outstanding invoice from Laces to Funder (Reverse Factoring approach). Funder then provides financing for a rate based on Sneakers credit risk. This financing is passed back through the supply chain, until it reaches Cotton Grower.'
  ],

  aboveImage:
    'Financing requests and outstanding amounts are matched and passed through the supply chain',
  belowImage:
    'Financing at lower rates and excess liquidity is passed back through the supply chain',

  aboveSteps: [
    'Cotton Grower requests an early payment from Fabric.',
    'Fabric matches this request with outstanding invoices against Laces and asks for an early payment of its invoice  to Laces.',
    'Laces  matches the request with outstanding invoices against Sneaker and requests an early payment request from Sneakers.',
    'Sneakers as the anchor buyer has access to capital and can finance the request that was passed on from Cotton Grower all the way to Sneakers through the supply chain.'
  ],
  belowSteps: [
    'Thus, a few minutes after the request for early payments (all transactions are automated), Cotton Grower receives financing at a rate based on Sneakers credit rating.',
    'Fabric does the same with Cotton Grower.',
    'Laces sees the early payment from Sneakers and forwards that on to Fabric by paying an invoice to Fabric early. For facilitating this transaction, Laces can charge a small fee on this transaction.',
    'Sneakers confirms the early payment request to Laces and settles the transaction by paying the invoice from Laces early. '
  ]
}
