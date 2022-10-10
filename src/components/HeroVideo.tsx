import { Box, Stack, Text } from '@centrifuge/fabric'
import * as React from 'react'
import { CenterContainer } from './CenterContainer'

export type HeroVideoProps = {
  title: string
  body: string
  videoUrl: string
}

export function HeroVideo({ title, body, videoUrl }: HeroVideoProps) {
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
          src={videoUrl}
          autoPlay
          muted
        />
      </Stack>
    </CenterContainer>
  )
}
