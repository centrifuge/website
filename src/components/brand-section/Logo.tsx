import React from 'react'
import { Stack, Box, Text } from '@centrifuge/fabric'
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
  return (
    <Box as="section">
      <Text as="h3" variant="heading2" mb={2}>
        {title}
      </Text>

      <Stack gap={10} mt={4}>
        {items.map((item, index) => (
          <Unit key={`${item.title}${index}`} title={item.title} body={item.body}>
            <Gallery images={item.images} />
          </Unit>
        ))}
      </Stack>
    </Box>
  )
}
