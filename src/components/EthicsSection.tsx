import { Container, Divider, Grid, Stack, Text } from '@centrifuge/fabric'
import * as React from 'react'

export type EthicsSectionProps = {
  title: string
}

export function EthicsSection({ title }: EthicsSectionProps) {
  return (
    <Container>
      <Stack gap={5}>
        <Stack gap={1}>
          <Text variant="heading2" as="h2">
            {title}
          </Text>
          <Divider />
        </Stack>
        <Grid gridTemplateColumns={['1fr', '1fr', '1fr 2fr']}>
          <span />
          <Grid columns={[1, 2]} gap={8} rowGap={[4, 10]}>
            <Text variant="heading5">No boundaries</Text>
            <Text variant="body1">
              We want to build a culture of deep curiosity- one that nurtures intellectual exploration above all. We
              want to give space for ideas to flourish, explore tangents and for releasing ourselves from rigid thought
              patterns.
            </Text>
            <Text variant="heading5">Autonomy &amp; Accountability</Text>
            <Text variant="body1">
              We nurture a high sense of responsibility to ourselves, to our team members and the mission carried out.
              We work on our own terms, but keep our eye on the collective goal.
            </Text>
            <Text variant="heading5">Knowledge Sharing</Text>
            <Text variant="body1">
              We believe that a collective brain is more valuable than individual ones, so we foster a culture of
              sharing and transparency. From weekly all-hands, monthly book clubs and quarterly personal feedback to
              cooking up big group lunches, encouraging transparency and knowledge sharing is crucial at Centrifuge.
            </Text>
            <Text variant="heading5">Enthusiasm!</Text>
            <Text variant="body1">
              We want people to be excited to work for Centrifuge and respect that people get out of bed for different
              reasons. We are flexible with schedules and allow our employees to climb, dance or do yoga when it suits
              them. We aim to build an inclusive company- hiring people from different backgrounds with a passion for
              something outside themselves, whether for alternative governance or techno, community activism or
              decentralization.
            </Text>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  )
}
