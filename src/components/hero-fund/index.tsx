import * as React from 'react'
import { graphql } from 'gatsby'
import { AnchorButton, Text, Divider, Stack, Box } from '@centrifuge/fabric'
import { links } from '../../../config/links'
import { ImageProps, Image } from '../Image'
import { Reveal, RevealWrapper } from '../Reveal'
import { Root, Inner, Media, Title } from './styles'

export const query = graphql`
  fragment HeroFundFragment on DataJsonHero_fund {
    pretitle
    title
    body
    items {
      title
      url
    }
    image {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
      publicURL
      extension
    }
  }
`

type Items = {
  title: string
  url: keyof typeof links
}

export type HeroFundProps = {
  pretitle: string
  title: string
  body: string
  image: ImageProps
  items: Items[]
}

export function HeroFund({ pretitle, title, body, image, items }: HeroFundProps) {
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
              <Box display="flex">
                {items?.map((item: Items, index) => {
                  return (
                    <Box mr={4}>
                      <AnchorButton
                        variant={index === items.length - 1 ? 'secondary' : 'primary'}
                        href={links[item.url]}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {item.title}
                      </AnchorButton>
                    </Box>
                  )
                })}
              </Box>
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
