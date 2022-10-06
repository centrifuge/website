import * as React from 'react'
import { Box } from '@centrifuge/fabric'
import type { SectionType } from '../Sections'
import { links } from '../../../config/links'
import { ChainStats } from '../chain-stats/ChainStats'
import test from '../../images/hero-main-shape.svg'
import { Inner, Title, Content, Graphic, Paragraph, CTA } from './styles'

export type HeroMainProps = {
  type: SectionType
  title: string[]
  body: string[]
}

export function HeroMain({ title, body }: HeroMainProps) {
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
            <img src={test} alt="" />
          </Graphic>

          {body.map((entry, index) => (
            <Paragraph key={`${index}`} variant="body1">
              {entry}
            </Paragraph>
          ))}

          <CTA href={links.app} target="_blank" small>
            Enter App
          </CTA>
        </Content>

        <ChainStats />
      </Inner>
    </Box>
  )
}
