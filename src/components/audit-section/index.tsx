import React from 'react'
import { graphql } from 'gatsby'
import { Box, Container, Shelf, Text } from '@centrifuge/fabric'
import { Image, ImageProps } from '../Image'

export const query = graphql`
  fragment AuditSectionFragment on DataJsonAudit_section {
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

export type AuditSectionProps = {
  title: string
  items: { alt: string; image: ImageProps }[]
}

export function AuditSection({ title, items }: AuditSectionProps) {
  return (
    <Box as="section" px={2}>
      <Container>
        <Shelf>
          <Text as="h2">{title}</Text>
        </Shelf>
        <Shelf as="ul">
          {items.map(({ alt, image }, index) => (
            <li key={`${alt}${index}`}>
              <Image data={image} alt={alt} />
            </li>
          ))}
        </Shelf>
      </Container>
    </Box>
  )
}
