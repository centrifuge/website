import * as React from 'react'
import { graphql } from 'gatsby'
import { Box, Text } from '@centrifuge/fabric'
import type { PartnerProps } from '../partner-list'
import { links } from '../../../config/links'
import { ChainStats } from '../chain-stats/ChainStats'
import { PartnerList } from '../partner-list'
import { Image } from '../Image'
import { Inner, Title, Content, Graphic, CTA } from './styles'

export const query = graphql`
  fragment HeroMainFragment on DataJsonHero_main {
    title
    ticker
    body
    image {
      publicURL
      extension
    }
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
  image: string
  partners: PartnerProps[]
}

export function HeroMain({ title, ticker, body, image, partners }: HeroMainProps) {
  return (
    <Box as="section">
      <Box px={2} pt={[2, 4, 6]}>
        <Inner maxWidth="container">
          <Title>
            {title}
            <br />
            {ticker[0]}
          </Title>

          <Content>
            <Graphic>
              <Image data={image} />
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
