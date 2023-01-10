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
  const [inView, setIsInview] = React.useState(false)
  const delay = 0.4

  return (
    <RevealWrapper as="section" px={2} onEnter={() => setIsInview(true)}>
      <Container maxWidth="container">
        <Reveal isRevealed={inView} delay={delay}>
          <Text as="h2" variant="heading2">
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
              <Reveal as="li" key={`${item.title}${index}`} isRevealed={inView} delay={delay + index * 0.1}>
                <UspItem {...item} />
              </Reveal>
            ))}
          </Grid>
        </Container>
      </Container>
    </RevealWrapper>
  )
}
