import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Paragraph } from 'grommet'

import Grid from 'components/Grid'
import Column from 'components/Column'

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

const Image = styled.img`
  width: 100%;
  margin-bottom: 70px;

  @media only screen and (min-width: 769px) {
    margin-bottom: 0;
  }
`

const Content = styled.div`
  h1 {
    margin-top: 0;
    margin-bottom: 23px;

    @media only screen and (max-width: 768px) {
      margin-bottom: 31px;
    }
  }

  h1,
  p {
    @media only screen and (max-width: 768px) {
      text-align: center;
    }
  }
`
