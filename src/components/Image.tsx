import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { ImageDataLike } from 'gatsby-plugin-image'

export type ImageProps = {
  data: ImageDataLike & {
    extension?: string
    publicURL?: string
  }
  alt?: string
}

export function Image({ data, alt }: ImageProps) {
  if (!data) {
    console.warn('No image data')
    return null
  }

  if (data.extension === 'svg') {
    return <img src={data.publicURL} alt={alt || ''} />
  }

  const image = getImage(data)
  if (image) {
    return <GatsbyImage image={image} alt={alt || ''} />
  }

  return null
}
