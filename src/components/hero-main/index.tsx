import * as React from 'react'
import { Box, Text } from '@centrifuge/fabric'
import type { SectionType } from '../Sections'
import type { PartnerProps } from '../partner-list'
import { links } from '../../../config/links'
import { ChainStats } from '../chain-stats/ChainStats'
import { PartnerList } from '../partner-list'
import shape from '../../images/hero-main-shape.svg'
import { Inner, Title, Content, Graphic, CTA } from './styles'

export type HeroMainProps = {
  type: SectionType
  title: string[]
  body: string[]
  partners: PartnerProps[]
}

export function HeroMain({ title, body, partners }: HeroMainProps) {
  return (
    <Box as="section" px={2} py={[2, 4, 6]}>
      <Inner maxWidth="container">
        <Title>
          Real-World
          <br />
          {title[0]}
        </Title>

        <Content>
          <Graphic>
            <img src={shape} alt="" />
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
      <PartnerList partners={partners} />
    </Box>
  )
}
