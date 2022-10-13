import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Grid, Text } from '@centrifuge/fabric'
import type { UspItemProps } from './UspItem'
import { UspItem } from './UspItem'
import { Intro } from './styles'

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
    <Box as="section" px={2} py={6}>
      <Container maxWidth="container">
        <Text as="h2" variant="heading2">
          {title}
        </Text>
        <Intro mt={2}>
          <Text variant="body1" as="p" color="textSecondary">
            {body}
          </Text>
        </Intro>

        <Container maxWidth="containerNarrow">
          <Grid
            as="ul"
            role="list"
            columns={[1, 1, 2]}
            gap={10}
            rowGap={8}
            m={0}
            mt={10}
            p={0}
            style={{ listStyle: 'none' }}
          >
            {items.map((item, index) => (
              <li key={`${item.title}${index}`}>
                <UspItem {...item} />
              </li>
            ))}
          </Grid>
        </Container>
      </Container>
    </Box>
  )
}
