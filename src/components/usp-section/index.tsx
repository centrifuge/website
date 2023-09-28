import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Grid, Text } from '@centrifuge/fabric'
import { Reveal, RevealWrapper } from '../Reveal'
import type { UspItemProps } from './UspItem'
import { UspItem } from './UspItem'

export const query = graphql`
  fragment UspSectionFragment on DataJsonUsp_section {
    title
    body
    items {
      title
      body
      image {
        publicURL
        extension
      }
    }
  }
`

export type UspSectionProps = {
  title: string
  body: string
  items: UspItemProps[]
}

export function UspSection({ title, body, items }: UspSectionProps) {
  return (
    <RevealWrapper as="section" px={2}>
      <Container maxWidth="container">
        <Reveal>
          <Text as="h2" variant="heading2b">
            {title}
          </Text>

          <Box mt={2}>
            <Text variant="body1" as="p" color="textSecondary">
              {body}
            </Text>
          </Box>
        </Reveal>

        <Container maxWidth="containerNarrow">
          <Grid as="ul" role="list" columns={[1, 1, 2]} gap={10} rowGap={8} mt={10}>
            {items.map((item, index) => (
              <Reveal as="li" key={`${item.title}${index}`} staggerIndex={index + 1}>
                <UspItem {...item} />
              </Reveal>
            ))}
          </Grid>
        </Container>
      </Container>
    </RevealWrapper>
  )
}
