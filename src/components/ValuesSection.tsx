import { Stack, Text } from '@centrifuge/fabric'
import * as React from 'react'
import { CenterContainer } from './CenterContainer'

export type ValuesSectionProps = {
  title: string
}

export function ValuesSection({ title }: ValuesSectionProps) {
  return (
    <CenterContainer as="section">
      <Stack alignItems="center">
        <Text variant="heading2" as="h2">
          {title}
        </Text>
      </Stack>
    </CenterContainer>
  )
}
