import React from 'react'
import { graphql } from 'gatsby'
import { AnchorButton, Container, Shelf, Text } from '@centrifuge/fabric'
import { Reveal, RevealWrapper } from '../Reveal'
import { Image, ImageProps } from '../Image'
import { links } from '../../../config/links'
import { Media } from './styles'

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
  const [inView, setIsInview] = React.useState(false)

  return (
    <RevealWrapper as="section" px={2} onEnter={() => setIsInview(true)}>
      <Container>
        <Reveal isRevealed={inView}>
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

        <Reveal isRevealed={inView}>
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
            {items.map(({ alt, image }, index) => (
              <Media key={`${alt}${index}`}>
                <Image data={image} alt={alt} />
              </Media>
            ))}
          </Shelf>
        </Reveal>
      </Container>
    </RevealWrapper>
  )
}
