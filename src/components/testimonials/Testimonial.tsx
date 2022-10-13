import React from 'react'
import { Grid, Box, Text } from '@centrifuge/fabric'
import { useTheme } from 'styled-components'
import { Image } from '../Image'
import type { ImageProps } from '../Image'
import { Media } from './styles'

export type TestimonialProps = {
  body: string
  cite: string
  image: ImageProps
  image_max_width: number
}

export function Testimonial({ body, cite, image, image_max_width }: TestimonialProps) {
  const { colors } = useTheme()

  return (
    <Grid as="figure" m={0} p={0} gridTemplateColumns={[1, 'repeat(2, minmax(0, 1fr))']} alignItems="center">
      <Media justifySelf="center" maxWidth={image_max_width}>
        <Image data={image} />
      </Media>
      <Box>
        <Box as="blockquote" m={0} p={0}>
          <Text variant="body1" as="p">
            {body}
          </Text>
        </Box>
        <Box as="figcaption" pt={1}>
          <Text as="cite" variant="body2" color={colors.textSecondary} style={{ fontStyle: 'normal' }}>
            - {cite}
          </Text>
        </Box>
      </Box>
    </Grid>
  )
}
