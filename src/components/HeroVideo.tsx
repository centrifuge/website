import { Box, Stack, Text, Grid } from '@centrifuge/fabric'
import { graphql } from 'gatsby'
import * as React from 'react'
import { CenterContainer } from './CenterContainer'
import { YoutubeEmbed } from './YoutubeEmbed'

export const query = graphql`
  fragment HeroVideoFragment on DataJsonHero_video {
    title
    body
    video {
      youtubeId
    }
  }
`

export type HeroVideoProps = {
  title: string
  body: string
  video:
    | {
        youtubeId: string
      }
    | {
        url: string
      }
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
        <Grid gridTemplateColumns={['1fr', '1fr', 'repeat(3, minmax(0, 1fr))']} gap={6} mt={6}>
          {'youtubeId' in video ? (
            <YoutubeEmbed videoId={video.youtubeId} width="100%" gridColumn={['1', '1', '2/4']} />
          ) : (
            <Box as="video" aspectRatio="16 / 9" width="100%" src={video.url} autoPlay muted loop />
          )}
        </Grid>
      </Stack>
    </CenterContainer>
  )
}
