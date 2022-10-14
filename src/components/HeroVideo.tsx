import { Box, Stack, Text } from '@centrifuge/fabric'
import { graphql } from 'gatsby'
import * as React from 'react'
import { CenterContainer } from './CenterContainer'

export const query = graphql`
  fragment HeroVideoFragment on DataJsonHero_video {
    title
    body
    video
  }
`

export type HeroVideoProps = {
  title: string
  body: string
  video: string
}

export function HeroVideo({ title, body, video }: HeroVideoProps) {
  return (
    <CenterContainer as="section" pt={8}>
      <Stack gap={2}>
        <Text variant="tag" as="h1">
          {title}
        </Text>
        <Box maxWidth={950}>
          <Text variant="heading5" as="p">
            {body}
          </Text>
        </Box>
        {/* @ts-expect-error `width` prop type conflicts with video element `width` attribute */}
        <Box
          as="video"
          aspectRatio="16 / 9"
          alignSelf="flex-end"
          width={['100%', '100%', '75%']}
          src={video}
          autoPlay
          muted
          loop
          mt={6}
        />
      </Stack>
    </CenterContainer>
  )
}
