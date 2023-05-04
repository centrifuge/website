import { Box, Stack, Text, Grid, Button, AnchorButton } from '@centrifuge/fabric'
import { graphql } from 'gatsby'
import * as React from 'react'

import { CenterContainer } from './CenterContainer'
import { YoutubeEmbed } from './YoutubeEmbed'
import { Reveal, RevealWrapper } from './Reveal'

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
  children?: React.ReactNode
}

export function HeroVideo({ title, body, video, children }: HeroVideoProps) {
  return (
    <RevealWrapper>
      <CenterContainer as="section" pt={8}>
        <Stack gap={2} alignItems="start">
          <Reveal>
            <Text variant="tag" as="h1">
              {title}
            </Text>
          </Reveal>
          <Reveal maxWidth={950} staggerIndex={1}>
            <Text variant="heading5" as="p">
              {body}
            </Text>
          </Reveal>

          {children && <Reveal staggerIndex={2}>{children}</Reveal>}

          <Reveal width="100%" maxWidth={940} mt={6} staggerIndex={2}>
            {'youtubeId' in video ? (
              <YoutubeEmbed videoId={video.youtubeId} width="100%" gridColumn={['1', '1', '2/4']} />
            ) : (
              <Box as="video" aspectRatio="16 / 9" width="100%" src={video.url} autoPlay muted loop />
            )}
          </Reveal>
        </Stack>
      </CenterContainer>
    </RevealWrapper>
  )
}
