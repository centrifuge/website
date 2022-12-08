import React from 'react'
import { Text, Stack } from '@centrifuge/fabric'
import type { ImageProps } from '../Image'
import { Unit } from './Unit'
import { Gallery } from './Gallery'

export type FontProps = {
  title: string
  body: string
  image: ImageProps
}

export function Font({ title, body, image }: FontProps) {
  return (
    <Stack as="section" gap={2}>
      <Text as="h3" variant="heading2">
        {title}
      </Text>

      <Unit body={body}>
        <Gallery images={[image]} />
      </Unit>
    </Stack>
  )
}
