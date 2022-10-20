import React from 'react'
import { graphql } from 'gatsby'
import { Stack, Shelf, Box, Text, AnchorButton } from '@centrifuge/fabric'
import { Base } from '../components/Base'
import { SEO } from '../components/Seo'
import type { SEOProps } from '../components/Seo'
import { explore } from '../../config/explore'
import { Logo } from '../components/Logo'
import { HeadProps, Link } from 'gatsby'
import styled from 'styled-components'

export const query = graphql`
  query {
    dataJson(slug: { eq: "/explore" }) {
      title

      seo {
        ...SeoFragment
      }
    }
  }
`

const LogoLink = styled(Link)`
  aspect-ratio: 1 / 1;
  width: 175px;
  display: grid;
  place-items: center;
  border: 1px solid black;
  border-radius: 50%;

  svg {
    display: block;
    width: 100%;
    height: auto;
    transform: scale(0.8);
  }
`

type ExploreProps = {
  data: {
    dataJson: {
      title: string
      seo: SEOProps
    }
  }
}

export default function Explore({ data }: ExploreProps) {
  return (
    <Base>
      <Box as="main" py={6} px={2} flexGrow={2}>
        <Shelf as="header" flexDirection="column" alignItems="center" gap={2}>
          <LogoLink to="/" title="Go to centrifuge.io">
            <Logo />
          </LogoLink>
          <Text as="h1" varaint="body1" textAlign="center">
            {data.dataJson.title}
          </Text>
        </Shelf>

        <Stack gap={6} as="nav" role="navigation" aria-label="Main" mt={6}>
          {explore.map((section) => (
            <Shelf
              key={section.title}
              as="section"
              flexDirection="column"
              alignItems="center"
              width="100%"
              maxWidth={400}
              marginX="auto"
            >
              <Text as="h2" variant="heading4">
                {section.title}
              </Text>

              <Stack as="ul" role="list" gap={1} width="100%" mt={1}>
                {section.items.map((item, index) => (
                  <Box key={`${item.label}${index}`} as="li">
                    <AnchorButton
                      href={item.href}
                      target={item.isExternal ? '_blank' : '_self'}
                      style={{ display: 'block' }}
                    >
                      {item.label}
                    </AnchorButton>
                  </Box>
                ))}
              </Stack>
            </Shelf>
          ))}
        </Stack>
      </Box>
    </Base>
  )
}

export const Head = ({ data, location }: ExploreProps & HeadProps) => {
  const { seo } = data.dataJson
  const { pathname } = location

  return <SEO title={seo.title} description={seo.description} pathname={pathname} />
}
