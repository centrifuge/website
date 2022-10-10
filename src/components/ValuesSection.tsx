import { Stack, Text } from '@centrifuge/fabric'
import * as React from 'react'
import { CenterContainer } from './CenterContainer'

export type ValuesSectionProps = {
  title: string
  items: [string, string, string, string]
}

export function ValuesSection({ title, items }: ValuesSectionProps) {
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
