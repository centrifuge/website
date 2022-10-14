import { Divider, Grid, Shelf, Stack, Text } from '@centrifuge/fabric'
import { graphql } from 'gatsby'
import * as React from 'react'
import { CenterContainer } from '../CenterContainer'
import { Image, ImageProps } from '../Image'
import { Media } from './styles'

export const query = graphql`
  fragment OrgSectionFragment on DataJsonOrg_section {
    title
    items {
      title
      body
      image {
        publicURL
        extension
      }
    }
  }
`

type ItemProps = {
  image: ImageProps['data']
  title: string
  body: string
}

function Item({ image, title, body }: ItemProps) {
  return (
    <Shelf gap={[3, 7, 3]} flexDirection={['column', 'row', 'column']} alignItems="stretch" role="listitem">
      <Media aspectRatio="1 / 1" alignSelf="flex-start" width="50%" flex={['0', '0 0 30%', '0']}>
        <Image data={image} />
      </Media>
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
