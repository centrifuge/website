import React from 'react'
import { graphql } from 'gatsby'
import { Container, Text, Grid, Stack } from '@centrifuge/fabric'
import { Reveal, RevealWrapper } from '../Reveal'
import type { ImageProps } from '../Image'
import { Image } from '../Image'
import { Column } from './styles'

export const query = graphql`
  fragment WorkPrincipleFragment on DataJsonWork_principle {
    title
    items {
      label
      title
      body
      image {
        publicURL
        extension
      }
    }
  }
`

export type WorkPrincipleProps = {
  title: string
  items: PrincipleProps[]
}

export function WorkPrinciple({ title, items }: WorkPrincipleProps) {
  return (
    <RevealWrapper as="section" px={2} py={8}>
      <Container>
        <Reveal>
          <Text as="h2" variant="heading2b">
            {title}
          </Text>
        </Reveal>

        <Container maxWidth="containerNarrow">
          <Stack gap={10} mt={[6, 6, 10]} p={0} as="ul" role="list" style={{ listStyle: 'none' }}>
            {items.map((item, index) => (
              <Reveal as="li" key={`${item.label}${index}`} staggerIndex={index}>
                <Principle {...item} flipped={index % 2 > 0} />
              </Reveal>
            ))}
          </Stack>
        </Container>
      </Container>
    </RevealWrapper>
  )
}

type PrincipleProps = {
  label: string
  title: string
  body: string
  image: ImageProps
  flipped: boolean
}

function Principle({ label, title, body, image, flipped }: PrincipleProps) {
  return (
    <Grid alignItems="start" gridTemplateColumns={['1fr', '1fr', 'repeat(2, minmax(0, 1fr))']} gap={[2, 2, 10]}>
      <Column flipped={!flipped} px={2}>
        <Image data={image} />
      </Column>

      <Column flipped={flipped}>
        <Stack gap={1}>
          <Text variant="tag" as="span">
            {label}
          </Text>
          <Text as="h3" variant="heading4b">
            {title}
          </Text>
          <Text as="p" variant="body1">
            {body}
          </Text>
        </Stack>
      </Column>
    </Grid>
  )
}
