import React from 'react'
import styled from 'styled-components'

import Grid from 'components/Grid'
import Column from 'components/Column'
import Container from 'components/Container'

import graph_supplychain_img from 'images/deep-tier-finance/graph_supplychain.svg'

export default function DTFImage() {
  return (
    <Container>
      <Grid noMargin style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <Column justifySelf='stretch'>
          <Image src={graph_supplychain_img} />
        </Column>
      </Grid>
    </Container>
  )
}

const Image = styled.img`
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    width: 80%;
  }
`
