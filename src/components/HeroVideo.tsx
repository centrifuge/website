import { Box, Container, Stack, Text } from '@centrifuge/fabric'
import * as React from 'react'

export type HeroVideoProps = {
  title: string
  body: string
  videoUrl: string
}

export const HeroVideo: React.FC<HeroVideoProps> = ({ title, body, videoUrl }) => {
  return (
    <Container>
      <Stack gap={2}>
        <Text variant="tag">{title}</Text>
        <Text variant="heading5">{body}</Text>
        <Box as="img" aspectRatio="16 / 9" alignSelf="flex-end" height="500px" src={videoUrl} />
      </Stack>
    </Container>
  )
}
