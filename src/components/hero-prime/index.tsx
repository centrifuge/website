import * as React from 'react'
import { graphql } from 'gatsby'
import { AnchorButton, Text, Divider, Stack } from '@centrifuge/fabric'
import { links } from '../../../config/links'
import { ImageProps, Image } from '../Image'
import { Reveal, RevealWrapper } from '../Reveal'
import { Root, Inner, Media, Title } from './styles'

export const query = graphql`
  fragment HeroPrimeFragment on DataJsonHero_prime {
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

export type HeroPrimeProps = {
  title: string
  body: string
  image: ImageProps
}

export function HeroPrime({ title, body, image }: HeroPrimeProps) {
  return (
    <RevealWrapper>
      <Root as="section" flexDirection="column" px={2} pt={[2, 4, 6, 10]} pb={[2, 4, 10]}>
        <Inner>
          <Stack gap={3} maxWidth={['100%', '100%', '60%', '50%']}>
            <Reveal>
              <Title forwardedAs="h1" variant="heading2">
                {title}
              </Title>
            </Reveal>

            <Reveal staggerIndex={1}>
              <Divider />
            </Reveal>

            <Reveal staggerIndex={2}>
              <Text as="p">{body}</Text>
            </Reveal>

            <Reveal staggerIndex={3}>
              <AnchorButton href={links.prime} rel="noopener noreferrer" target="_blank">
                Join Beta
              </AnchorButton>
            </Reveal>
          </Stack>
        </Inner>

        <Media ml="auto" mr={[-2, -2, 0]} width={['90%', '70%', '50%']}>
          <Image data={image} alt="" objectFit="contain" objectPosition="center right" />
        </Media>
      </Root>
    </RevealWrapper>
  )
}
