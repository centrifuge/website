import React from 'react'
import { Box, Heading, Paragraph, Text } from 'grommet'

import Grid from 'components/Grid'
import Column from 'components/Column'
import Container from 'components/Container'

import Logo from './Logo'

import logo from 'images/centrifuge-wordmark-light.svg'

export default function PoweredByCentrifuge() {
  return (
    <Box tag='section' background='black'>
      <Container>
        <Grid>
          <Column>
            <Heading
              lined
              level={2}
              style={{ display: 'flex', borderBottomColor: '#d8d8d8' }}
            >
              <span>Powered by</span>
              <Logo src={logo} />
            </Heading>
            <Paragraph>{data.paragraph}</Paragraph>
          </Column>
        </Grid>
      </Container>
    </Box>
  )
}

const data = {
  paragraph:
    'Centrifuge OS is an open, decentralized platform to connect the global financial supply chain. It provides participants with an immutable, censorship-resistant, single source of truth for shared documents like invoices and purchase orders - the missing technology to enable Deep Tier Finance. This allows all tiers of a supply chain to interact with each other without giving up ownership of their data. No centralized entity will be needed anymore to coordinate between participants and extract rents.'
}
