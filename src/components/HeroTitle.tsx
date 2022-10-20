import { Divider, Stack, Text } from '@centrifuge/fabric'
import * as React from 'react'

type Props = {
  title?: string
  subtitle?: string
  body?: string
}

export function HeroTitle({ title, subtitle, body }: Props) {
  return (
    <Stack gap={2}>
      {title && (
        <Text variant="tag" as={!subtitle ? 'h1' : 'span'}>
          {title}
        </Text>
      )}
      {subtitle && (
        <Text as="h1" variant="heading1">
          {subtitle}
        </Text>
      )}
      {body && (
        <Stack gap={1} mt={1}>
          <Divider />
          <Text as="p" variant="body1">
            {body}
          </Text>
        </Stack>
      )}
    </Stack>
  )
}
