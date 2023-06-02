import { Divider, Grid, Shelf, Stack, Text } from '@centrifuge/fabric'
import * as React from 'react'
import { CenterContainer } from '../CenterContainer'
import { Reveal, RevealWrapper } from '../Reveal'
import { Image, ImageProps } from '../Image'
import { Media } from './styles'

export type FeatureSectionProps = {
  title: string
  items: FeatureCardProps[]
  body?: string
}

export function FeatureSection({ title, items, body }: FeatureSectionProps) {
  return (
    <RevealWrapper>
      <CenterContainer>
        <Stack as="section" gap={8}>
          <Stack gap={2}>
            <Reveal>
              <Text variant="heading2" as="h2">
                {title}
              </Text>
            </Reveal>

            {!!body && (
              <Reveal staggerIndex={1}>
                <Text as="p" color="textSecondary" variant="body1">
                  {body}
                </Text>
              </Reveal>
            )}
          </Stack>

          <Grid columns={[1, 1, 3]} gap={[8, 8, 5]} equalColumns as="ul" role="list">
            {items.map((item, index) => (
              <Reveal staggerIndex={index + (body ? 2 : 1)} key={`${index}${item.title}`}>
                <FeatureCard {...item} />
              </Reveal>
            ))}
          </Grid>
        </Stack>
      </CenterContainer>
    </RevealWrapper>
  )
}

type FeatureCardProps = {
  image: ImageProps['data']
  title: string
  body: string
}

function FeatureCard({ image, title, body }: FeatureCardProps) {
  return (
    <Shelf gap={[3, 7, 3]} flexDirection={['column', 'row', 'column']} alignItems="stretch" as="li">
      <Media
        aspectRatio="1 / 1"
        alignSelf="flex-start"
        width="50%"
        maxWidth={[120, 160, 180]}
        flex={['0', '0 0 30%', '0']}
      >
        <Image data={image} />
      </Media>
      <Stack gap={3} flex="1">
        <Divider />
        <Stack gap={2}>
          <Text variant="heading4" as="h3">
            {title}
          </Text>
          <Text variant="body1" as="p">
            {body}
          </Text>
        </Stack>
      </Stack>
    </Shelf>
  )
}
