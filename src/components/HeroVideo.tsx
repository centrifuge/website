import { Box, Stack, Text, Grid, Button, AnchorButton } from '@centrifuge/fabric'
import { graphql } from 'gatsby'
import * as React from 'react'
import { CenterContainer } from './CenterContainer'
import { YoutubeEmbed } from './YoutubeEmbed'

export const query = graphql`
  fragment HeroVideoFragment on DataJsonHero_video {
    title
    body
    cta {
      title
      href
    }
    video {
      youtubeId
    }
  }
`

export type HeroVideoProps = {
  title: string
  body: string
  cta?: {
    title: string
    href: string
  }
  video:
    | {
        youtubeId: string
      }
    | {
        url: string
      }
}

export function HeroVideo({ title, body, cta, video }: HeroVideoProps) {
  return (
    <CenterContainer as="section" pt={8}>
      <Stack gap={2} alignItems="start">
        <Text variant="tag" as="h1">
          {title}
        </Text>

        <Box maxWidth={950}>
          <Text variant="heading5" as="p">
            {body}
          </Text>
        </Box>

        {cta && (
          <AnchorButton href={cta.href} variant="secondary">
            {cta.title}
          </AnchorButton>
        )}

        <Box width="100%" maxWidth={940} mt={6}>
          {'youtubeId' in video ? (
            <YoutubeEmbed videoId={video.youtubeId} width="100%" gridColumn={['1', '1', '2/4']} />
          ) : (
            <Box as="video" aspectRatio="16 / 9" width="100%" src={video.url} autoPlay muted loop />
          )}
        </Box>
      </Stack>
    </CenterContainer>
  )
}
