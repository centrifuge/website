import * as React from 'react'
import { useTheme } from 'styled-components'
import { Box, Text } from '@centrifuge/fabric'
import type { AnchorProps } from './Anchor'
import { Anchor } from './Anchor'

type ColumnProps = {
  title: string
  items: AnchorProps[]
}

export function Column({ title, items }: ColumnProps) {
  const { colors } = useTheme()

  return (
    <div>
      <Text as="h3" variant="body3" style={{ color: colors.textDisabled, textTransform: 'uppercase' }}>
        {title}
      </Text>

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
