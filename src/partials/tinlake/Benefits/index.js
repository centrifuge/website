import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Text } from 'grommet'

import Grid from 'components/Grid'
import Column from 'components/Column'
import FullWidthContainer from 'components/FullWidthContainer'

import benefits_originators_img from 'images/tinlake/benefits_originators.svg'
import benefits_lenders_img from 'images/tinlake/benefits_lenders.svg'
import benefits_investors_img from 'images/tinlake/benefits_investors.svg'

export default function Benefits() {
  return (
    <FullWidthContainer>
      <Grid noMargin style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <Column span={{ medium: 11, large: 11 }} style={{ width: '100%' }}>
          <Heading lined level={2}>
            {data.heading}
          </Heading>
        </Column>

        {data.cards.map((card, i) => (
          <Card
            key={`Benefits-card-${i}`}
            span={{ medium: 4, large: 4 }}
            alignSelf='start'
          >
            <Images>
              {card.images.map((image, j) => (
                <img key={`Benefits-card-${i}-image-${j}`} src={image} />
              ))}
            </Images>

            <Text size='large' style={{ paddingBottom: 20 }}>
              {card.heading}
            </Text>

            {card.bullet_points.map((bullet_point, j) => (
              <Text
                key={`Benefits-card-${i}-bullet-point-${j}`}
                style={{ paddingBottom: 10 }}
              >
                {bullet_point}
              </Text>
            ))}
          </Card>
        ))}
      </Grid>
    </FullWidthContainer>
  )
}

const data = {
  heading: 'Benefits',
  cards: [
    {
      heading: 'Originators',
      images: [benefits_originators_img],
      bullet_points: [
        '• Fast access to capital',
        '• Cost effective process for collateralization',
        '• Broader funder base',
        '• Possibly lower cost sources of capital',
        '• Ability to unlock new assets for funding'
      ]
    },
    {
      heading: 'DeFi Lending',
      images: [benefits_lenders_img],
      bullet_points: [
        '• Significant asset scalability',
        '• Diversification with real-world assets ',
        '• Trust minimized smart contract counterparty solution',
        '• Numerous on-chain credit enhancements to protect against defaults'
      ]
    },
    {
      heading: 'Traditional Investors',
      images: [benefits_investors_img],
      bullet_points: [
        '• Improved loan level transparency',
        '• Potential yield enhancement from cost savings',
        '• Composability for new forms of financing',
        '• Access to newly unlocked asset classes'
      ]
    }
  ]
}

const Images = styled.div`
  display: flex;
  align-items: flex-end;

  @media only screen and (min-width: 768px) {
    min-height: 120px;
  }

  img {
    width: 100px;
    margin-bottom: 20px;
  }

  img + img {
    margin-left: 16px;
  }
`

const Card = styled(Column)`
  span {
    text-align: start;
  }

  & + & {
    padding-top: 50px;
  }

  @media only screen and (min-width: 768px) {
    & + & {
      padding-top: 0px;
    }
  }
`
