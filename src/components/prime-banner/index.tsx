import { Box, Container, Grid, Text } from '@centrifuge/fabric'
import { graphql } from 'gatsby'
import * as React from 'react'
import { Reveal, RevealWrapper } from '../Reveal'
import { InternalLink } from '../InternalLink'
import { Title } from './styles'

export const query = graphql`
  fragment PrimeBannerFragment on DataJsonPrime_banner {
    title
    body
  }
`

export type PrimeBannerProps = {
  title: string
  body: string
}

export function PrimeBanner({ title, body }: PrimeBannerProps) {
  return (
    <RevealWrapper>
      <Reveal as="section" px={2}>
        <Container
          px={[2, 3, 4, 6]}
          py={[4, 4, 4, 6]}
          borderColor="textPrimary"
          borderStyle="solid"
          borderWidth={1}
          borderRadius="input"
        >
          <Grid gridTemplateColumns={['1fr', '1fr', 'auto 1fr', 'auto 1fr auto']} gap={[3, 3, 4, 6, 10]}>
            <Title forwardedAs="h2" variant="heading4">
              {title}
            </Title>

            <Text as="p">{body}</Text>

            <Box alignSelf="center" mt={[2, 2, 0]}>
              <InternalLink to="https://example.com" variant="secondary">
                Learn More
              </InternalLink>
            </Box>
          </Grid>
        </Container>
      </Reveal>
    </RevealWrapper>
  )
}
