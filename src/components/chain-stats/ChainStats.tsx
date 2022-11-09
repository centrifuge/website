import * as React from 'react'
import { Text } from '@centrifuge/fabric'
import { Root, ListItem } from './styles'

export function ChainStats() {
  return (
    <Root as="ul" role="list" py={[2, 1, 1, 2]}>
      <Item>
        <Label>Assets Financed</Label>
        <Value>$ 176M</Value>
      </Item>

      <Item>
        <Label>Total Assets tokenized</Label>
        <Value>1000</Value>
      </Item>

      <Item>
        <Label>TL Growth (YTD)</Label>
        <Value>+ 150%</Value>
      </Item>
    </Root>
  )
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <ListItem as="li" py={1}>
      {children}
    </ListItem>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <Text as="span" variant="label1" fontWeight="400">
      {children}
    </Text>
  )
}

function Value({ children }: { children: React.ReactNode }) {
  return (
    <Text as="span" variant="body1" fontWeight="500" style={{ fontVariantNumeric: 'tabular-nums' }}>
      {children}
    </Text>
  )
}
