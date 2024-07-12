import React from 'react'
import type { CSSProperties } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { ImageDataLike } from 'gatsby-plugin-image'

export type ImageProps = {
  data: ImageDataLike & {
    extension?: string
    publicURL?: string
  }
  alt?: string
  objectFit?: CSSProperties['objectFit']
  objectPosition?: CSSProperties['objectPosition'],
  styles?: React.CSSProperties
}

export function Image({ data, alt, objectFit = 'cover', objectPosition = 'center', styles }: ImageProps) {
  if (!data) {
    console.warn('No image data')
    return null
  }

  if (data.extension === 'svg') {
    return <img src={data.publicURL} alt={alt || ''} style={{ ...styles }} />
  }

  const image = getImage(data)
  if (image) {
    return <GatsbyImage image={image} alt={alt || ''} objectFit={objectFit} objectPosition={objectPosition} style={{ ...styles }} />
  }

  return null
}
