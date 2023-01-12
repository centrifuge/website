import React from 'react'
import { Stack, Box, Text } from '@centrifuge/fabric'
import { Reveal, RevealWrapper } from '../Reveal'
import { Unit } from './Unit'
import { Gallery } from './Gallery'
import type { ImageProps } from '../Image'

export type LogosProps = {
  title: string
  items: {
    title: string
    body: string
    images: ImageProps[]
  }[]
}

export function Logos({ title, items }: LogosProps) {
  const [inView, setIsInview] = React.useState(false)

  return (
    <RevealWrapper as="section">
      <Reveal mb={2}>
        <Text as="h3" variant="heading2">
          {title}
        </Text>
      </Reveal>

      <Stack gap={10} mt={4}>
        {items.map((item, index) => (
          <Unit key={`${item.title}${index}`} title={item.title} body={item.body} staggerIndex={index + 1}>
            <Gallery images={item.images} />
          </Unit>
        ))}
      </Stack>
    </RevealWrapper>
  )
}
