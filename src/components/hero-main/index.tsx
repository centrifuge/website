import * as React from 'react'
import { graphql } from 'gatsby'
import { AnchorButton, Text, Stack, Shelf } from '@centrifuge/fabric'
import { links } from '../../../config/links'
import { ImageProps, Image } from '../Image'
import { Reveal, RevealWrapper } from '../Reveal'
import { Root, Inner, Media, Title } from './styles'
import {PartnerList, PartnerProps} from "../partner-list";
import {ChainStats} from "../chain-stats/ChainStats";
import {useVisibilityChecker} from "../../hooks/use-visibility-checker";
import FullscreenVideoOverlay from '../fullscreen-video-overlay';

export const query = graphql`
  fragment HeroMainFragment on DataJsonHero_main {
    title
    ticker
    body
    image {
      publicURL
      extension
    }
    partners {
      image {
        publicURL
        extension
      }
      alt
    }
  }
 `

export type HeroMainProps = {
  title: string
  ticker: string[]
  body: string[]
  image: ImageProps
  partners: PartnerProps[]
}

export function HeroMain({ title, ticker, body, image, partners }: HeroMainProps) {
  return (
    <RevealWrapper>
      <Root as="section" flexDirection="column" px={2} pt={[0, 0, 0, 0]} pb={[10, 10, 10, 10]}>
        <Shelf px={2} pt={[1, 2, 3]}>
          <Inner maxWidth="container" alignSelf="start">
            <Stack gap={3} maxWidth={['100%', '100%', '60%', '50%']}>

              <Reveal staggerIndex={1}>
                <Title forwardedAs="h1" variant="heading2b">
                  {title}
                </Title>
              </Reveal>

              <Reveal staggerIndex={1}>
                <Text as="p" variant="body1">
                  {body}
                </Text>
              </Reveal>

              <Reveal staggerIndex={2}>
                <AnchorButton href={links.app} rel="noopener noreferrer" target="_blank">
                  Enter App
                </AnchorButton>
              </Reveal>

            </Stack>

            {/* This embeds directly onto page vs. fullscreen modal
            <Media ml="auto" mr={[-2, -2, 0]} width={['90%', '70%', '50%']}>
                <iframe
                  src="https://player.vimeo.com/video/935042824?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                  frameBorder="0" allow="fullscreen; picture-in-picture; clipboard-write"
                  title="Introduction to Centrifuge">
                </iframe>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </Media>*/}
            {/*todo: we want to wrap this in a <Reveal>, but it messes up formatting for video thumbnail + modal - unsure why*/}
            <Media>
              {
                image.publicURL &&
                <FullscreenVideoOverlay thumbnail={image.publicURL} videoId={"935042824"} />
              }
            </Media>
          </Inner>
        </Shelf>
        <Reveal px={3} mt="auto" staggerIndex={3}>
          <ChainStats/>
        </Reveal>
      </Root>

      <Reveal staggerIndex={3} >
        <PartnerList partners={partners}/>
      </Reveal>
    </RevealWrapper>
  )
}