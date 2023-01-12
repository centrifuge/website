import { Text, Shelf, Box } from '@centrifuge/fabric'
import { graphql } from 'gatsby'
import * as React from 'react'
import { links } from '../../../config/links'
import { useVisibilityChecker } from '../../hooks/use-visibility-checker'
import { Reveal, RevealWrapper } from '../Reveal'
import { ChainStats } from '../chain-stats/ChainStats'
import type { PartnerProps } from '../partner-list'
import { PartnerList } from '../partner-list'
import { Typewriter } from '../Typewriter'
import type { ImageProps } from '../Image'
import { Image } from '../Image'
import { Root, Inner, Title, Content, Graphic, CTA } from './styles'

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
  const [animate, setAnimate] = React.useState(false)

  const ref = React.useRef<HTMLElement>(null)
  useVisibilityChecker({
    ref,
    onEnter: () => setAnimate(true),
    onLeave: () => setAnimate(false),
  })

  return (
    <RevealWrapper>
      <Root as="section" ref={ref} flexDirection="column">
        <Shelf px={2} pt={[2, 4, 6]}>
          <Inner maxWidth="container" alignSelf="start">
            <Reveal gridArea={['none', 'inner']}>
              <Title>
                {title}
                <br />
                <Typewriter phrases={ticker} paused={!animate} />
              </Title>
            </Reveal>

            <Content>
              <Reveal staggerIndex={1}>
                <Graphic>
                  <Image data={image} />
                </Graphic>
              </Reveal>

              <Reveal staggerIndex={2}>
                {body.map((entry, index) => (
                  <Text key={`${index}`} variant="body1" as="p">
                    {entry}
                  </Text>
                ))}
              </Reveal>

              <Reveal staggerIndex={3}>
                <CTA href={links.app} target="_blank" small>
                  Enter App
                </CTA>
              </Reveal>
            </Content>
          </Inner>
        </Shelf>

        <Reveal px={2} mt="auto" staggerIndex={1}>
          <ChainStats />
        </Reveal>

        <Reveal staggerIndex={2}>
          <PartnerList partners={partners} />
        </Reveal>
      </Root>
    </RevealWrapper>
  )
}
