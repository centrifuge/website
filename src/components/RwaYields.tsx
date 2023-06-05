import * as React from 'react'
import { graphql } from 'gatsby'
import { Box } from '@centrifuge/fabric'
import { ImageProps, Image } from './Image'
import { TextImage } from './text-image'

export const query = graphql`
  fragment RwaYieldsFragment on DataJsonRwa_yields {
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

export type RwaYieldsProps = {
  title: string
  body: string
  image: ImageProps
}

export function RwaYields({ title, body, image }: RwaYieldsProps) {
  return (
    <TextImage
      title={title}
      body={body}
      media={
        <Box maxWidth={[500, 500, '100%']} mx="auto">
          <Image data={image} alt="" />
        </Box>
      }
    />
  )
}
