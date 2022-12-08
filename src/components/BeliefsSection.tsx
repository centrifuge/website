import { Divider, Grid, Stack, Text } from '@centrifuge/fabric'
import * as React from 'react'
import { graphql } from 'gatsby'
import { CenterContainer } from './CenterContainer'

export const query = graphql`
  fragment BeliefsSectionFragment on DataJsonBeliefs_section {
    title
    items {
      title
      body
    }
  }
`

export type BeliefsSectionProps = {
  title: string
  items: { title: string; body: string }[]
}

export function BeliefsSection({ title, items }: BeliefsSectionProps) {
  return (
    <CenterContainer as="section">
      <Stack gap={5}>
        <Stack gap={1}>
          <Text variant="heading2" as="h2">
            {title}
          </Text>
          <Divider />
        </Stack>
        <Grid gridTemplateColumns={['1fr', '1fr', '1fr 2fr']}>
          <span />
          <Grid columns={[1, 2]} gap={8} rowGap={[4, 10]} role="list">
            {items.map((item) => (
              <React.Fragment key={item.title}>
                <Text variant="heading5" as="h3" role="listitem">
                  {item.title}
                </Text>
                <Text variant="body1" as="p">
                  {item.body}
                </Text>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Stack>
    </CenterContainer>
  )
}
