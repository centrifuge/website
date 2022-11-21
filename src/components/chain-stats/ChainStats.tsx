import * as React from 'react'
import { Text, TextWithPlaceholder } from '@centrifuge/fabric'
import { usePoolsData } from '../../hooks/use-pools-data'
import { useLoansData } from '../../hooks/use-loans-data'
import { Root, ListItem } from './styles'

export function ChainStats() {
  const pools = usePoolsData()
  const loans = useLoansData()

  React.useEffect(() => {
    console.log('pools isLoading', pools.isLoading)
    console.log('pools isError', pools.isError)
    if (pools.data) {
      console.log('pools data', pools.data)
    }
  }, [pools.data, pools.isLoading, pools.isError])

  React.useEffect(() => {
    console.log('loans isLoading', loans.isLoading)
    console.log('loans isError', loans.isError)
    if (loans.data) {
      console.log('data loans', loans.data)
    }
  }, [loans.data, loans.isLoading, loans.isError])

  return (
    <Root as="ul" role="list" py={[2, 1, 1, 2]}>
      <Item>
        <Label>Assets Financed</Label>
        <Value isLoading={pools.isLoading}>$ 176M</Value>
      </Item>

      <Item>
        <Label>Total Assets tokenized</Label>
        <Value>1000</Value>
      </Item>

      <Item>
        <Label>TVL Growth (YoY)</Label>
        <Value isLoading={loans.isLoading}>+ 150%</Value>
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
