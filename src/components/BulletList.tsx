import { Text, Stack, IconArrowRight } from '@centrifuge/fabric'
import * as React from 'react'
import styled from 'styled-components'

type BulletListProps = {
  items: string[]
}

const Icon = styled(IconArrowRight)`
  vertical-align: middle;
  width: 1em;
  height: 1em;
  margin-right: 0.5em;
  transform: rotate(45deg);
`

export function BulletList({ items }: BulletListProps) {
  return items && items.length ? (
    <Stack as="ul" gap={1}>
      {items.map((entry, index) => (
        <Text key={index} as="li">
          <Icon />
          {entry}
        </Text>
      ))}
    </Stack>
  ) : null
}
