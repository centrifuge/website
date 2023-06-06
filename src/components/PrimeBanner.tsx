import { Box, Container, Grid, Text } from '@centrifuge/fabric'
import * as React from 'react'
import { Reveal, RevealWrapper } from './Reveal'
import { InternalLink } from './InternalLink'

export function PrimeBanner() {
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
            <Text as="h2" variant="heading4" style={{ whiteSpace: 'pre' }}>
              Introducing Centrifuge Prime: <br />
              Real-World Assets for DeFi
            </Text>

            <Text as="p">
              Finally you can quickly and easily onboard and scale a portfolio of real-world assets with Centrifuge
              Prime. The technology and services you need, all made available in a single place, through Centrifuge.
            </Text>

            <Box alignSelf="center" mt={[2, 2, 0]}>
              <InternalLink to="/prime" variant="secondary">
                Learn More
              </InternalLink>
            </Box>
          </Grid>
        </Container>
      </Reveal>
    </RevealWrapper>
  )
}
