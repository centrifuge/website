import React from 'react'
import { Box, Heading, Paragraph, ResponsiveContext } from 'grommet'

import Grid from 'components/Grid'
import Container from 'components/Container'
import Column from 'components/Column'

import HeroTitle from './HeroTitle'
import Image from './Image'

import graph_circle_img from 'images/deep-tier-finance/graph_circle.svg'

export default function Hero() {
  const heroDescription = (
    <>
      <Heading className='tinlake_heading' level={2} lined>
        {data.heading}
      </Heading>
      <Paragraph>{data.paragraph}</Paragraph>
    </>
  )

  return (
    <ResponsiveContext.Consumer>
      {size => (
        <Box pad={{ horizontal: '40px' }}>
          <Grid>
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
        </Box>
      )}
    </ResponsiveContext.Consumer>
  )
}

const data = {
  heading: 'What is Deep Tier Finance?',
  paragraph:
    'Deep Tier Finance is an innovative financing solution for locked-up working capital in supply chains. As trust and reputation of large companies ripple down the supply chain through transparent business relations, blockchain-based Deep Tier Finance enables financing at better rates, deeper into the supply chain. Deep Tier Finance is made possible by Centrifuge OS, a decentralized, trustless blockchain-based technology that provides an immutable, censorship-resistant, single source of truth for all participants of the network.'
}
