import * as React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Text } from '@centrifuge/fabric'
import { Reveal, RevealWrapper } from './Reveal'
import { LogoList } from './logo-list'
import type { ImageProps } from './Image'

export const query = graphql`
  fragment PrimePartnersFragment on DataJsonPrime_partners {
    title
    items {
      image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
        publicURL
        extension
      }
      alt
    }
  }
`

export type PrimePartnersProps = {
  title: string
  items: {
    image: ImageProps
    alt: string
  }[]
}

export function PrimePartners({ title, items }: PrimePartnersProps) {
  return (
    <RevealWrapper>
      <Box as="section" px={2}>
        <Container>
          <Reveal>
            <Text as="h2" variant="heading4" textAlign="center">
              {title}
            </Text>
          </Reveal>

          <Reveal staggerIndex={1} mt={4}>
            <LogoList items={items} />
          </Reveal>
        </Container>
      </Box>
    </RevealWrapper>
  )
}
