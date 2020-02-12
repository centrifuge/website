import React from 'react'
import { Box, Heading, Paragraph } from 'grommet'

import Grid from '../../../components/Grid'
import Column from '../../../components/Column'
import Container from '../../../components/Container'

import Image from './Image'

import tinlake_flow_desktop_img from '../../../images/tinlake/tinlake-flow-desktop.svg'
import tinlake_flow_mobile_img from '../../../images/tinlake/tinlake-flow-mobile.svg'

export default function WhatIsTinlake() {
  return (
    <>
      <Container>
        <Grid align='start' mb='0px'>
          <Column>
            <div>
              <Heading className='tinlake_heading' level={2} lined>
                {data.heading}
              </Heading>
              <Paragraph>{data.paragraph}</Paragraph>
            </div>
          </Column>
        </Grid>
      </Container>

      <Box pad={{ horizontal: '40px' }}>
        <Grid>
          <Column mobileHide justifySelf='stretch'>
            <Image src={tinlake_flow_desktop_img} />
          </Column>
          <Column tabletHide justifySelf='stretch'>
            <Image src={tinlake_flow_mobile_img} />
          </Column>
        </Grid>
      </Box>
    </>
  )
}

const data = {
  heading: 'What is Tinlake?',
  paragraph:
    'Tinlake is a asset-backed lending smart contract platform that is designed for Asset Originators like lending platforms, payment companies, embedded software solutions, and banks that seek to utilize the full potential of decentralized finance. The protocol coordinates the various parties required to structure, administer, and finance collateralized pools of financial obligations like invoices, mortgages, auto loans, or royalties. By simplifying the process and reducing costs, Tinlake’s protocol creates financing flexibility for Asset Originators allowing them to optimize risk allocation and access instant funding from a new category of crypto lending protocols while simultaneously improving transparency and accessibility for their traditional investors.'
}
