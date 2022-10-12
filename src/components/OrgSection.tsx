import { Box, Divider, Grid, Shelf, Stack, Text } from '@centrifuge/fabric'
import * as React from 'react'
import center from '../images/org-center.svg'
import group from '../images/org-group.svg'
import remote from '../images/org-remote.svg'
import { CenterContainer } from './CenterContainer'

const images = {
  center,
  remote,
  group,
}

type ItemProps = {
  image: keyof typeof images
  title: string
  body: string
}

function Item({ image, title, body }: ItemProps) {
  return (
    <Shelf gap={[3, 7, 3]} flexDirection={['column', 'row', 'column']} alignItems="stretch" role="listitem">
      <Box
        aspectRatio="1 / 1"
        alignSelf="flex-start"
        width="50%"
        as="img"
        src={images[image]}
        flex={['0', '0 0 30%', '0']}
        alt=""
      />
      <Stack gap={3} flex="1">
        <Divider />
        <Stack gap={2}>
          <Text variant="heading4" as="h3">
            {title}
          </Text>
          <Text variant="body2" as="p">
            {body}
          </Text>
        </Stack>
      </Stack>
    </Shelf>
  )
}

export type OrgSectionProps = {
  title: string
  items: ItemProps[]
}

export function OrgSection({ title, items }: OrgSectionProps) {
  return (
    <CenterContainer>
      <Stack as="section" gap={8}>
        <Text variant="heading2" as="h2">
          {title}
        </Text>
        <Grid columns={[1, 1, 3]} gap={[8, 8, 5]} equalColumns role="list">
          {items.map((i) => (
            <Item {...i} key={i.title} />
          ))}
        </Grid>
      </Stack>
    </CenterContainer>
  )
}
