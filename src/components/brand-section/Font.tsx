import React from 'react'
import { Text, Stack } from '@centrifuge/fabric'
import type { ImageProps } from '../Image'
import { Reveal, RevealWrapper } from '../Reveal'
import { Unit } from './Unit'
import { Gallery } from './Gallery'

export type FontProps = {
  title: string
  body: string
  image: ImageProps
}

export function Font({ title, body, image }: FontProps) {
  return (
    <RevealWrapper>
      <Stack as="section" gap={2}>
        <Reveal>
          <Text as="h3" variant="heading2b">
            {title}
          </Text>
        </Reveal>

        <Unit body={body} staggerIndex={1}>
          <Gallery images={[image]} />
        </Unit>
      </Stack>
    </RevealWrapper>
  )
}
