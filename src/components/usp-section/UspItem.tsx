import React from 'react'
import { Grid, Text } from '@centrifuge/fabric'
import { Image } from '../Image'
import type { ImageProps } from '../Image'
import { ItemContent, Media } from './styles'

export type UspItemProps = {
  title: string
  body: string
  image: ImageProps
}

export function UspItem({ title, body, image }: UspItemProps) {
  return (
    <Grid gridTemplateColumns={['64px 1fr', '64px 1fr', '64px 1fr', '160px 1fr']} gap={2}>
      <Media>
        <Image data={image} />
      </Media>
      <ItemContent pt={1} gap={2}>
        <Text as="h3" variant="heading4b">
          {title}
        </Text>
        <Text as="p" variant="body2">
          {body}
        </Text>
      </ItemContent>
    </Grid>
  )
}
