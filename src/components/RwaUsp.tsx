import * as React from 'react'
import { graphql } from 'gatsby'
import { AnchorButton, Box, Shelf } from '@centrifuge/fabric'
import { Reveal } from './Reveal'
import { ImageProps, Image } from './Image'
import { BulletList } from './BulletList'
import { TextImage } from './text-image'
import { links } from '../../config/links'

export const query = graphql`
  fragment RwaUspFragment on DataJsonRwa_usp {
    title
    body
    items
    image {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
      publicURL
      extension
    }
  }
`

export type RwaUspProps = {
  title: string
  body: string
  items: string[]
  image: ImageProps
}

export function RwaUsp({ title, body, items, image }: RwaUspProps) {
  return (
    <TextImage
      title={title}
      body={body}
      media={
        <Box maxWidth={[350, 350, 450]} ml={['auto', 'auto', 'unset']} mr="auto">
          <Image data={image} alt="" />
        </Box>
      }
      content={
        <Reveal staggerIndex={2} mt={6} as={Shelf} justifyContent={['start', 'start', 'center']}>
          <BulletList items={items} />
        </Reveal>
      }
      titleAddition={
        <AnchorButton
          href={links.prime}
          rel="noopener noreferrer"
          target="_blank"
          variant="secondary"
          style={{ whiteSpace: 'nowrap' }}
          small
        >
          Join Beta
        </AnchorButton>
      }
    />
  )
}
