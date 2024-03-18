import * as React from 'react'
import {graphql} from 'gatsby'
import {AnchorButton, Box, Shelf} from '@centrifuge/fabric'
import {Reveal} from './Reveal'
import {ImageProps, Image} from './Image'
import {BulletListFund} from './BulletListFund'
import {TextImage} from './text-image'
import {links} from '../../config/links'

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

export type FundUspProps = {
  title: string
  body: string
  items: string[]
  image: ImageProps
}

export function FundUsp({title, body, items, image}: FundUspProps) {
  return (
    <TextImage
      title={title}
      body={body}
      media={
        <Box maxWidth={[350, 550, 550]} mx="auto">
          <Image data={image} alt=""/>
        </Box>
      }
      content={
        <Reveal staggerIndex={2} mt={6} as={Shelf} justifyContent={['center', 'start', 'start']}>
          <BulletListFund items={items}/>
        </Reveal>
      }
      titleAddition={
        <Box ml={2}>
          <AnchorButton
            href={links.fundManagementBlogPost}
            rel="noopener noreferrer"
            target="_blank"
            small
            variant="secondary"
            style={{whiteSpace: 'nowrap'}}
          >
            Learn More
          </AnchorButton>
        </Box>
      }
    />
  )
}