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
  const [inView, setIsInview] = React.useState(false)

  return (
    <RevealWrapper onEnter={() => setIsInview(true)}>
      <CenterContainer as="section" pt={8}>
        <Stack gap={2} alignItems="start">
          <Reveal isRevealed={inView}>
            <Text variant="tag" as="h1">
              {title}
            </Text>
          </Reveal>
          <Reveal maxWidth={950} isRevealed={inView} staggerIndex={1}>
            <Text variant="heading5" as="p">
              {body}
            </Text>
          </Reveal>

          {cta && (
            <Reveal isRevealed={inView} staggerIndex={2}>
              <AnchorButton href={cta.href} variant="secondary">
                {cta.title}
              </AnchorButton>
            </Reveal>
          )}

          <Reveal width="100%" maxWidth={940} mt={6} isRevealed={inView} staggerIndex={2}>
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
