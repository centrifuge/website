import React from 'react'
import { Box, Text } from '@centrifuge/fabric'

export type UnitProps = {
  title?: string
  body: string
  children: React.ReactNode
}

export function Unit({ title, body, children }: UnitProps) {
  return (
    <Box>
      {title && (
        <Text as="h4" variant="heading4">
          {title}
        </Text>
      )}
      <Box maxWidth={600}>
        <Text as="p">{body}</Text>
      </Box>

      <Box mt={2}>{children}</Box>
    </Box>
  )
}
