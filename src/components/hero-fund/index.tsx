import * as React from 'react'
import { graphql } from 'gatsby'
import { AnchorButton, Text, Divider, Stack } from '@centrifuge/fabric'
import { links } from '../../../config/links'
import { ImageProps, Image } from '../Image'
import { Reveal, RevealWrapper } from '../Reveal'
import { Root, Inner, Media, Title } from './styles'

export const query = graphql`
  fragment HeroFundFragment on DataJsonHero_fund {
    pretitle
    title
    body
    image {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
      publicURL
      extension
    }
  }
`

export type HeroFundProps = {
  pretitle: string
  title: string
  body: string
  image: ImageProps
}

export function HeroFund({ pretitle, title, body, image }: HeroFundProps) {
  return (
    <RevealWrapper>
      <Root as="section" flexDirection="column" px={2} pt={[2, 4, 6, 10]} pb={[0, 0, 10, 0]}>
        <Inner>
          <Stack gap={3} maxWidth={['100%', '100%', '60%', '50%']}>
            <Stack gap={1}>
              <Reveal>
                <Text variant="tag" as="span">
                  {pretitle}
                </Text>
              </Reveal>

              <Reveal staggerIndex={1}>
                <Title forwardedAs="h1" variant="heading2b" style={{ whiteSpace: 'pre' }}>
                  {title}
                </Title>
              </Reveal>
            </Stack>

            <Reveal staggerIndex={2}>
              <Divider />
            </Reveal>

            <Reveal staggerIndex={3}>
              <Text as="p" variant="body1">
                {body}
              </Text>
            </Reveal>

            <Reveal staggerIndex={4}>
              <AnchorButton href={links.fundManagement} rel="noopener noreferrer" target="_blank">
                Join Beta
              </AnchorButton>
            </Reveal>
          </Stack>
        </Inner>

        <Media ml="auto" mr={[-2, -2, 0]} width={['90%', '70%', '50%']}>
          <Image data={image} alt="" objectFit="contain" objectPosition="bottom right" />
        </Media>
      </Root>
    </RevealWrapper>
  )
}
