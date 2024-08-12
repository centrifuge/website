import * as React from 'react'
import { graphql } from 'gatsby'
import { AnchorButton, Box, Shelf } from '@centrifuge/fabric'
import { ImageProps, Image } from './Image'
import { TextImage } from './text-image'
import { links } from '../../config/links'

export const query = graphql`
  fragment MorphoFragment on DataJsonMorpho {
    title
    body
    image {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
      publicURL
      extension
    }
  }
`

export type MorphoProps = {
  title: string
  body: string
  image: ImageProps
}

export function Morpho({ title, body, image }: MorphoProps) {
  return (
    <TextImage
      isBodyHtml={true}
      title={title}
      body={body}
      media={
        <Box maxWidth={[500, 500, '100%']} mx="auto">
          <Image data={image} alt="" />
        </Box>
      }
      titleAddition={
        <Box ml={2}>
          <AnchorButton
            href={links.primeBlogPost}
            rel="noopener noreferrer"
            target="_blank"
            small
            variant="secondary"
            style={{ whiteSpace: 'nowrap' }}
          >
            Open Morpho
          </AnchorButton>
        </Box>
      }
    />
  )
}
