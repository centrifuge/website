import { Box, Text } from '@centrifuge/fabric'
import { graphql } from 'gatsby'
import * as React from 'react'
import { links } from '../../../config/links'
import { ChainStats } from '../chain-stats/ChainStats'
import type { PartnerProps } from '../partner-list'
import { PartnerList } from '../partner-list'
import { Swirl } from './Swirl'
import { Typewriter } from '../Typewriter'
import { Inner, Title, Content, Graphic, CTA } from './styles'

export const query = graphql`
  fragment HeroMainFragment on DataJsonHero_main {
    title
    ticker
    body
    partners {
      image {
        publicURL
        extension
      }
      alt
    }
  }
`

export type HeroMainProps = {
  title: string
  ticker: string[]
  body: string[]
  partners: PartnerProps[]
}

export function HeroMain({ title, ticker, body, partners }: HeroMainProps) {
  return (
    <Box as="section">
      <Box px={2} pt={[2, 4, 6]}>
        <Inner maxWidth="container">
          <Title>
            {title}
            <br />
            <Typewriter phrases={ticker} />
          </Title>

          <Content>
            <Graphic>
              <Swirl />
            </Graphic>

            {body.map((entry, index) => (
              <Text key={`${index}`} variant="body1" as="p">
                {entry}
              </Text>
            ))}

            <CTA href={links.app} target="_blank" small>
              Enter App
            </CTA>
          </Content>

          <ChainStats />
        </Inner>
      </Box>
      <PartnerList partners={partners} />
    </Box>
  )
}
