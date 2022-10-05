import { Box, Container, Divider, Grid, Shelf, Stack, Text } from '@centrifuge/fabric'
import * as React from 'react'
import org1 from '../images/org1.svg'
import org2 from '../images/org2.svg'
import org3 from '../images/org3.svg'

type ItemProps = {
  image: string
  title: string
  body: string
}

function Item({ image, title, body }: ItemProps) {
  return (
    <Shelf gap={[3, 7, 3]} flexDirection={['column', 'row', 'column']} alignItems="stretch">
      <Box aspectRatio="1 / 1" alignSelf="flex-start" width="50%" as="img" src={image} flex={['0', '0 0 30%', '0']} />
      <Stack gap={3} flex="1">
        <Divider />
        <Stack gap={2}>
          <Text variant="heading4">{title}</Text>
          <Text variant="body2">{body}</Text>
        </Stack>
      </Stack>
    </Shelf>
  )
}

export type OrgSectionProps = {
  title: string
}

export function OrgSection({ title }: OrgSectionProps) {
  return (
    <Container>
      <Stack as="section" gap={8}>
        <Text variant="heading2" as="h2">
          {title}
        </Text>
        <Grid columns={[1, 1, 3]} gap={[8, 8, 5]} equalColumns>
          <Item
            image={org1}
            title="Self-managed organization (SMO)"
            body="As an SMO, we work to minimize hierarchy and decentralize power, similar to the way our product is built."
          />
          <Item image={org2} title="Fully remote" body="Work anywhere in the world" />
          <Item image={org3} title="Retreat" body="In-person retreats bi-annually" />
        </Grid>
      </Stack>
    </Container>
  )
}
