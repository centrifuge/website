import { Box, Container, Stack, Text } from '@centrifuge/fabric'
import React from 'react'
import { graphql } from 'gatsby'

import { Colors } from './Colors'
import { Font } from './Font'
import { Logos } from './Logo'
import type { ColorsProps } from './Colors'
import type { FontProps } from './Font'
import type { LogosProps } from './Logo'

export const query = graphql`
  fragment BrandSectionFragment on DataJsonBrands {
    title

    color {
      title
      items {
        title
        body
        colors {
          title
          value
          outline
          inverted
        }
      }
    }

    font {
      title
      body
      image {
        publicURL
        extension
      }
    }

    logo {
      title
      items {
        title
        body
        images {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
          publicURL
          extension
        }
      }
    }
  }
`

export type BrandSectionProps = {
  title: string
  color?: ColorsProps
  font?: FontProps
  logo?: LogosProps
}

export function BrandSection({ title, color, font, logo }: BrandSectionProps) {
  return (
    <Box as="article" px={2}>
      <Container>
        <Text as="h2" variant="tag">
          {title}
        </Text>

        <Stack gap={['layoutSmall', 'layoutMedium', 'layoutLarge']}>
          {color && <Colors {...color} />}
          {font && <Font {...font} />}
          {logo && <Logos {...logo} />}
        </Stack>
      </Container>
    </Box>
  )
}
