import * as React from 'react'
import { Box } from '@centrifuge/fabric'
import type { AnchorProps } from './Anchor'
import { Anchor } from './Anchor'
import { ColumnTitle } from './ColumnTitle'

type ColumnProps = {
  title: string
  items: AnchorProps[]
}

export function Column({ title, items }: ColumnProps) {
  return (
    <div>
      <ColumnTitle>{title}</ColumnTitle>

      <Box as="ul" role="list" mt={1}>
        {items.map((item, index) => (
          <Box as="li" key={`${item.label}-${index}`} mt={index > 0 ? '0.2em' : 0}>
            <Anchor {...item} />
          </Box>
        ))}
      </Box>
    </div>
  )
}
