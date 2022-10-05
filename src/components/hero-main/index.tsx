import * as React from 'react'
import type { SectionType } from '../Sections'
import { links } from '../../../config/links'
import { Box, Container, Text, AnchorButton } from '@centrifuge/fabric'
import { Shape } from './Shape'
import { Inner, Title, Content, Graphic, Paragraph } from './styles'

export type HeroMainProps = {
  type: SectionType
  title: string[]
  body: string[]
}

export function HeroMain({ title, body }: HeroMainProps) {
  return (
    <Box as="section" px={2} py={[2, 4, 6]}>
      <Inner>
        <Title>
          Real-World
          <br />
          {title[0]}
        </Title>

        <Content>
          <Graphic>
            <Shape />
          </Graphic>

          {body.map((entry, index) => (
            <Paragraph key={`${index}`}>{entry}</Paragraph>
          ))}

          {/* <a href={links.app} rel="noopener noreferrer" target="_blank">
            Enter App
          </a> */}
          <AnchorButton href={links.app} target="_blank" small>
            Enter App
          </AnchorButton>
        </Content>
      </Inner>
    </Box>
  )
}
