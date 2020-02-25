import React from 'react'
import styled from 'styled-components'
import { Box, Heading, Paragraph } from 'grommet'

import Grid from 'components/Grid'
import Column from 'components/Column'
import Container from 'components/Container'
import FullWidthContainer from 'components/FullWidthContainer'

import tinlake_overview_desktop_img from 'images/tinlake/tinlake-overview-desktop.svg'
import tinlake_overview_mobile_img from 'images/tinlake/tinlake-overview-mobile.svg'

export default function WhyWeBuiltTinlake() {
  return (
    <>
      <Container>
        <Grid noMargin pt='50px' align='start'>
          <Column>
            <div>
              <Heading level={2} lined>
                {data.heading}
              </Heading>
              <Paragraph>{data.paragraph}</Paragraph>
            </div>
          </Column>
        </Grid>
      </Container>

      <FullWidthContainer>
        <Grid noMargin pt='50px' pb='50px'>
          <Column mobileHide justifySelf='stretch'>
            <Image src={tinlake_overview_desktop_img} />
          </Column>
          <Column tabletHide justifySelf='stretch'>
            <Image src={tinlake_overview_mobile_img} />
          </Column>
        </Grid>
      </FullWidthContainer>
    </>
  )
}

const data = {
  heading: 'Why we built Tinlake?',
  paragraph:
    'Tinlake is built on top of the Centrifuge protocol. It allows for on-chain borrowing against collateralized loans completely managed by smart contracts. Not only does Tinlake enable Asset Originators to access the growing liquidity in the Decentralized Finance ecosystem, it also enables stablecoin issuers to offer a stable store of value backed by our collateralized loan pools.  Ultimately, Tinlake will become a fully decentralized lending protocol that interoperates with different blockchains and plugs into a variety of funding sources, including a variety of stablecoins.'
}

const Image = styled.img`
  width: 100%;
`
