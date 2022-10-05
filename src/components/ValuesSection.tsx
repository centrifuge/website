import { Container, Stack, Text } from '@centrifuge/fabric'
import * as React from 'react'

export type ValuesSectionProps = {
  title: string
}

export function ValuesSection({ title }: ValuesSectionProps) {
  return (
    <Container as="section">
      <Stack alignItems="center">
        <Text variant="heading2" as="h2">
          {title}
        </Text>
      </Stack>
    </Container>
  )
}
