import { Text, Shelf, Box } from '@centrifuge/fabric'
import { graphql } from 'gatsby'
import * as React from 'react'
import { links } from '../../../config/links'
import { useVisibilityChecker } from '../../hooks/use-visibility-checker'
import { ChainStats } from '../chain-stats/ChainStats'
import type { PartnerProps } from '../partner-list'
import { PartnerList } from '../partner-list'
import { Swirl } from './Swirl'
import { Typewriter } from '../Typewriter'
import { Root, Inner, Title, Content, Graphic, CTA } from './styles'

export const query = graphql`
  fragment HeroMainFragment on DataJsonHero_main {
    title
    ticker
    body
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
  partners: PartnerProps[]
}

export function HeroMain({ title, ticker, body, partners }: HeroMainProps) {
  const [animate, setAnimate] = React.useState(false)
  const [delta, setDelta] = React.useState(0)
  const ref = React.useRef<HTMLElement>(null)
  useVisibilityChecker({
    ref,
    onEnter: () => setAnimate(true),
    onLeave: () => setAnimate(false),
  })

  function onScroll() {
    setDelta(window.pageYOffset)
  }

  React.useEffect(() => {
    if (animate) {
      window.addEventListener('scroll', onScroll)
    } else {
      window.removeEventListener('scroll', onScroll)
    }

    return () => window.removeEventListener('scroll', onScroll)
  }, [animate])

  return (
    <Root as="section" ref={ref} flexDirection="column">
      <Shelf px={2} pt={[2, 4, 6]}>
        <Inner maxWidth="container" alignSelf="start">
          <Title>
            {title}
            <br />
            <Typewriter phrases={ticker} paused={!animate} />
          </Title>

          <Content>
            <Graphic>
              <Swirl animate={animate} delta={delta} />
            </Graphic>

            {body.map((entry, index) => (
              <Text key={`${index}`} variant="body1" as="p">
                {entry}
              </Text>
            ))}

            <CTA href={links.app} target="_blank" small>
              Enter App
            </CTA>
          </Content>
        </Inner>
      </Shelf>

      <Box px={2} mt="auto">
        <ChainStats />
      </Box>

      <PartnerList partners={partners} />
    </Root>
  )
}
