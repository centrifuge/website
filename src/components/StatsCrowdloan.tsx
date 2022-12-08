import { Grid, Shelf, Box, Container, Text, Stack } from '@centrifuge/fabric'
import React from 'react'
import { graphql } from 'gatsby'

export const query = graphql`
  fragment StatsCrowdloanFragment on CrowdloanJsonStats {
    title
    items {
      address
      amount
    }
  }
`

export type StatsCrowdloanProps = {
  stats: {
    title: string
    items: {
      address: string
      amount: string
    }[]
  }[]
}

export function StatsCrowdloan({ stats }: StatsCrowdloanProps) {
  return (
    <Container as="section" pt={4} borderTopWidth={1} borderTopColor="borderPrimary" borderTopStyle="solid">
      <Grid gridTemplateColumns={['1fr', '1fr', 'repeat(2, minmax(280px, 320px))']} gap={10} rowGap={4}>
        {stats.map((entry) => (
          <Box key={entry.title}>
            <Text as="h2" variant="emphasized">
              {entry.title}
            </Text>

            <Stack as="ol" role="list" p={0} mt={1} mb={0} width="100%" maxWidth={350} gap={1}>
              {entry.items.map(({ address, amount }, index) => (
                <Shelf
                  as="li"
                  key={`${address}${index}`}
                  justifyContent="space-between"
                  gap={1}
                  borderBottomWidth={1}
                  borderBottomColor="borderPrimary"
                  borderBottomStyle="solid"
                >
                  <Text as="span" variant="body2">
                    {address}
                  </Text>
                  <Text as="span" variant="body2" fontWeight={600}>
                    {amount}
                  </Text>
                </Shelf>
              ))}
            </Stack>
          </Box>
        ))}
      </Grid>
    </Container>
  )
}
