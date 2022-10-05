import * as React from 'react'
import { useTheme } from 'styled-components'
import { Text } from '@centrifuge/fabric'
import type { AnchorProps } from './Anchor'
import { Anchor } from './Anchor'
import { List, ListItem } from './styles'

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

      <List>
        {items.map((item, index) => (
          <ListItem key={`${item.label}-${index}`}>
            <Anchor {...item} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
