import React from 'react'
import { graphql } from 'gatsby'
import { AnchorButton, Container, Shelf, Text } from '@centrifuge/fabric'
import { Reveal, RevealWrapper } from '../Reveal'
import { Image, ImageProps } from '../Image'
import { links } from '../../../config/links'
import { Media, Anchor } from './styles'

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
      href
    }
  }
`

export type AuditSectionProps = {
  title: string
  items: { alt: string; image: ImageProps; href: string }[]
}

export function AuditSection({ title, items }: AuditSectionProps) {
  return (
    <RevealWrapper as="section" px={2}>
      <Container>
        <Reveal>
          <Shelf
            justifyContent={['space-between', 'space-between', 'start']}
            alignItems="center"
            flexWrap="wrap"
            gap={4}
            rowGap={1}
          >
            <Text as="h2" variant="heading2">
              {title}
            </Text>
            <AnchorButton href={links.audits} rel="noopener noreferrer" target="_blank" variant="secondary" small>
              View audit history
            </AnchorButton>
          </Shelf>
        </Reveal>

        <Reveal>
          <Shelf
            as="ul"
            role="list"
            justifyContent={['space-around', 'space-around', 'start']}
            alignItems="center"
            flexWrap="wrap"
            gap={[4, 6, 10]}
            rowGap={[4, 6]}
            mt={[4, 6]}
          >
            {items.map(({ alt, image, href }, index) => (
              <Media key={`${alt}${index}`}>
                <Anchor href={href} title={`Visit audit report of ${alt}`} rel="noopener noreferrer" target="_blank">
                  <Image data={image} alt={alt} />
                </Anchor>
              </Media>
            ))}
          </Shelf>
        </Reveal>
      </Container>
    </RevealWrapper>
  )
}
