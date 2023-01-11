import React from 'react'
import { Box, Text } from '@centrifuge/fabric'
import { Reveal } from '../Reveal'

export type UnitProps = {
  title?: string
  body: string
  children: React.ReactNode
  staggerIndex: number
}

export function Unit({ title, body, children, staggerIndex }: UnitProps) {
  return (
    <Reveal staggerIndex={staggerIndex}>
      {title && (
        <Text as="h4" variant="heading4">
          {title}
        </Text>
      )}
      <Box maxWidth={600}>
        <Text as="p">{body}</Text>
      </Box>

      <Box mt={2}>{children}</Box>
    </Reveal>
  )
}
