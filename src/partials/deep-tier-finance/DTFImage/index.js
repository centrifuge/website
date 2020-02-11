import React from 'react'
import styled from 'styled-components'

import Container from '../../../components/Container'

import DTF_graph_supplychain_img from '../../../images/DTF_graph_supplychain.svg'

export default function DTFImage() {
  return (
    <Container>
      <Image src={DTF_graph_supplychain_img} />
    </Container>
  )
}

const Image = styled.img`
  margin-top: 130px;
`
