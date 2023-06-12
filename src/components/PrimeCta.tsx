import * as React from 'react'
import { graphql } from 'gatsby'
import { AnchorButton, Box, Container, Divider, Grid, Stack, Text } from '@centrifuge/fabric'
import { Reveal, RevealWrapper } from './Reveal'
import { links } from '../../config/links'

export const query = graphql`
  fragment PrimeCtaFragment on DataJsonPrime_cta {
    title
    items
  }
`

export type PrimeCtaProps = {
  title: string
  items: string[]
}

export function PrimeCta({ title, items }: PrimeCtaProps) {
  return (
    <RevealWrapper>
      <Box as="section" mb="1px" px={2} py={[10, 10, '150px']} backgroundColor="textPrimary">
        <Container maxWidth="containerHeader">
          <Stack gap={3}>
            <Reveal>
              <Text as="h2" variant="heading2" color="textInverted" style={{ whiteSpace: 'pre' }}>
                {title}
              </Text>
            </Reveal>

            <Reveal staggerIndex={1}>
              <Divider borderColor="textDisabled" />
            </Reveal>

            <Grid gridTemplateColumns={['1fr', '1fr', '2fr 1fr', '1fr 1fr']} gap={4}>
              <Grid as="ul" columns={[1, 2]} equalColumns gap={[2, 6]}>
                {items.map((entry, index) => (
                  <Reveal key={index} as="li" staggerIndex={index + 2}>
                    <Text as="p" color="textInverted">
                      {entry}
                    </Text>
                  </Reveal>
                ))}
              </Grid>

              <Reveal justifySelf={['start', 'start', 'end']} staggerIndex={4}>
                <AnchorButton href={links.prime} rel="noopener noreferrer" target="_blank">
                  Join Beta
                </AnchorButton>
              </Reveal>
            </Grid>
          </Stack>
        </Container>
      </Box>
    </RevealWrapper>
  )
}
