import * as React from 'react'
import { Text, TextWithPlaceholder } from '@centrifuge/fabric'
import { usePoolsData } from '../../hooks/use-pools-data'
import { useTotalAssetsTokenized } from '../../hooks/use-get-total-assets-tokenized'
import { Root, ListItem } from './styles'

export function ChainStats() {
  const pools = usePoolsData()
  const totalAssetsTokenized = useTotalAssetsTokenized()

  return (
    <Root as="ul" role="list" py={[2, 1, 1, 2]}>
      {pools && (
        <Item>
          <Label>Assets Financed</Label>
          <Value isLoading={pools.isLoading}>$ {pools?.data?.totalAssetsFinanced}M</Value>
        </Item>
      )}

      <Item>
        <Label>Total Assets tokenized</Label>
        <Value isLoading={totalAssetsTokenized.isLoading}>{totalAssetsTokenized?.data}</Value>
      </Item>

      <Item>
        <Label>TVL Growth (YoY)</Label>
        <Value isLoading={pools.isLoading}>+ {pools?.data?.totalValueLocked}%</Value>
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

function Value({ children, isLoading }: { children: React.ReactNode; isLoading?: boolean }) {
  return (
    <TextWithPlaceholder
      as="span"
      variant="body1"
      fontWeight="500"
      style={{ fontVariantNumeric: 'tabular-nums' }}
      isLoading={isLoading}
    >
      {children}
    </TextWithPlaceholder>
  )
}
