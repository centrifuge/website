import React from 'react'
import styled from 'styled-components'

import Container from '../../../components/Container'

import graph_supplychain_img from '../../../images/deep-tier-finance/graph_supplychain.svg'

export default function DTFImage() {
  return (
    <Container>
      <Image src={graph_supplychain_img} />
    </Container>
  )
}

const Image = styled.img`
  margin-top: 130px;
`
