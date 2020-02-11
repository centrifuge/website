import React from 'react'
import { Box, Heading, Paragraph, Text } from 'grommet'

import Grid from '../../../components/Grid'
import Container from '../../../components/Container'
import Column from '../../../components/Column'

import Card from './Card'
import Images from './Images'
import Disclaimer from './Disclaimer'

import DTF_buyers_img from '../../../images/DTF_buyers.svg'
import DTF_funders_img from '../../../images/DTF_funders.svg'
import DTF_suppliers_1_img from '../../../images/DTF_suppliers_1.svg'
import DTF_suppliers_2_img from '../../../images/DTF_suppliers_3.svg'
import DTF_suppliers_3_img from '../../../images/DTF_suppliers_2.svg'

export default function WhyIsThisBeneficial() {
  return (
    <>
      <Container>
        <Grid>
          <Column>
            <Heading className='tinlake_heading' lined level={2}>
              {data.heading}
            </Heading>
            <Paragraph>{data.paragraph}</Paragraph>
          </Column>
        </Grid>
      </Container>

      <Box pad={{ horizontal: '40px' }}>
        <Grid noMargin>
          {data.cards.map((card, i) => (
            <Card
              key={`WhyIsThisBeneficial-card-${i}`}
              span={{ medium: 4, large: 4 }}
              alignSelf='start'
            >
              <Images>
                {card.images.map((image, j) => (
                  <img
                    key={`WhyIsThisBeneficial-card-${i}-image-${j}`}
                    src={image}
                  />
                ))}
              </Images>
              <Text size='large'>{card.heading}</Text>
              <Paragraph>{card.paragraph}</Paragraph>
            </Card>
          ))}
        </Grid>
      </Box>

      <Container>
        <Grid justify='center'>
          <Column>
            <Disclaimer>
              If you are interested in Deep Tier Finance,
              <br />
              please get in touch:{' '}
              <a href='mailto:hello@centrifuge.io'>
                deeptierfinance@centrifuge.io.
              </a>
            </Disclaimer>
          </Column>
        </Grid>
      </Container>
    </>
  )
}

const data = {
  heading: 'Why is this beneficial?',
  paragraph:
    'Deep Tier Finance would provide entire supply chains with cheaper access to funding for their working capital. This would benefit all parties involved:',
  cards: [
    {
      heading: 'Suppliers',
      paragraph:
        'Suppliers finance their working capital at significantly lower rates than before.',
      images: [DTF_suppliers_1_img, DTF_suppliers_2_img, DTF_suppliers_3_img]
    },
    {
      heading: 'Buyers',
      paragraph:
        'Buyers secure their supplier’s financial health, protect their supply chains and benefit from cost savings created from better supply chain management, lower costs of credit and better liquidity for their entire supply. chain. ',
      images: [DTF_buyers_img]
    },
    {
      heading: 'Funders',
      paragraph:
        'Funders extend their business across the entire supply chain at lower the risk of a reputable buyer',
      images: [DTF_funders_img]
    }
  ]
}
