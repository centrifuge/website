import React from 'react'
import { Box, Heading, Paragraph } from 'grommet'

import Grid from 'components/Grid'
import Column from 'components/Column'

import Image from './Image'
import Content from './Content'

import tinlakeLogo from 'images/tinlake/tinlake-logo.svg'

export default function Hero() {
  return (
    <Box pad={{ horizontal: '10%' }}>
      <Grid>
        <Column justifySelf='stretch' span={{ medium: 7, large: 7 }}>
          <Image src={tinlakeLogo} />
        </Column>

        <Column span={{ medium: 1, large: 1 }} />

        <Column span={{ medium: 4, large: 4 }}>
          <Content>
            <Heading level={1}>{data.heading}</Heading>
            <Paragraph>{data.paragraph}</Paragraph>
          </Content>
        </Column>
      </Grid>
    </Box>
  )
}

const data = {
  heading: 'Centrifuge Tinlake — Asset-backed lending protocol',
  paragraph:
    'Unlock the value of your real-world assets in the decentralized finance ecosystem. '
}
