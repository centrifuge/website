import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Paragraph, ResponsiveContext } from 'grommet'

import Grid from 'components/Grid'
import Column from 'components/Column'
import FullWidthContainer from 'components/FullWidthContainer'

import graph_circle_img from 'images/deep-tier-finance/graph_circle.svg'

export default function Hero() {
  const heroDescription = (
    <>
      <Heading level={2} lined>
        {data.heading}
      </Heading>
      <Paragraph>{data.paragraph}</Paragraph>
    </>
  )

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <FullWidthContainer>
          <Grid noMargin>
            <Column
              style={{ alignSelf: 'flex-start' }}
              span={{ medium: 6, large: 6 }}
            >
              <HeroTitle>
                <span style={{ fontWeight: '600' }}>Deep </span>
                <span style={{ fontWeight: '500' }}>Tier </span>
                Finance
              </HeroTitle>

              {size !== 'small' && heroDescription}
            </Column>

            <Column justifySelf='stretch' span={{ medium: 6, large: 6 }}>
              <Image src={graph_circle_img} />
            </Column>

            {size === 'small' && (
              <Column span={{ medium: 6, large: 6 }}>{heroDescription}</Column>
            )}
          </Grid>
        </FullWidthContainer>
      )}
    </ResponsiveContext.Consumer>
  )
}

const data = {
  heading: 'What is Deep Tier Finance?',
  paragraph:
    'Deep Tier Finance is an innovative financing solution for locked-up working capital in supply chains. As trust and reputation of large companies ripple down the supply chain through transparent business relations, blockchain-based Deep Tier Finance enables financing at better rates, deeper into the supply chain. Deep Tier Finance is made possible by Centrifuge OS, a decentralized, trustless blockchain-based technology that provides an immutable, censorship-resistant, single source of truth for all participants of the network.'
}

const HeroTitle = styled.h1`
  font-size: 40px;
  font-weight: normal;
  margin-top: 0;
  margin-bottom: 80px;

  @media only screen and (max-width: 768px) {
    margin-bottom: 50px;
  }
`

const Image = styled.img`
  width: 100%;
  margin: 0 0 90px auto;

  @media only screen and (min-width: 768px) {
    width: 90%;
    margin: 0 0 0 auto;
  }

  @media only screen and (min-width: 424px) and (max-width: 768px) {
    width: 80%;
    margin: 0 auto 90px auto;
  }
`
