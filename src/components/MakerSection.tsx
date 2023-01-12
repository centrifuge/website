import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Grid, Stack, Text } from '@centrifuge/fabric'
import { Reveal, RevealWrapper } from './Reveal'

export const query = graphql`
  fragment MakerSectionFragment on DataJsonMaker_section {
    title
    items {
      title
      body
      link {
        label
        href
      }
    }
  }
`

export type MakerSectionProps = {
  title: string
  items: ItemProps[]
}

export function MakerSection({ title, items }: MakerSectionProps) {
  return (
    <RevealWrapper as="section" p={2}>
      <Container>
        <Reveal>
          <Text as="h2" variant="heading2">
            {title}
          </Text>
        </Reveal>

        <Grid
          gap={6}
          gridTemplateColumns={['1fr', '1fr', 'repeat(2, minmax(0, 1fr))', 'repeat(3, minmax(0, 1fr))']}
          mt={[4, 4, 6]}
        >
          {items.map((item, index) => (
            <Reveal staggerIndex={index + 1} key={`${index}${item.title}`}>
              <Item {...item} />
            </Reveal>
          ))}
        </Grid>
      </Container>
    </RevealWrapper>
  )
}

type ItemProps = {
  title: string
  body: string
  link?: {
    label: string
    href: string
  }
}

function Item({ title, body, link }: ItemProps) {
  return (
    <Stack gap={[1, 1, 2]}>
      <Text as="h3" variant="heading4">
        {title}
      </Text>

      <Text as="p" variant="body1">
        {body}
      </Text>

      {link && (
        <Text
          as="a"
          href={link.href}
          rel="noopener noreferrer"
          target="_blank"
          variant="body1"
          style={{ textDecoration: 'underline' }}
        >
          {link.label}
        </Text>
      )}
    </Stack>
  )
}
