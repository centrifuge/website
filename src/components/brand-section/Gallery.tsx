import React from 'react'
import { Shelf } from '@centrifuge/fabric'
import styled from 'styled-components'
import { Image } from '../Image'

export function Gallery({ images }: { images: any[] }) {
  return (
    <Shelf as="ul" role="list" gap={4} flexWrap="wrap">
      {images.map((image, index) => (
        <Item key={index}>
          <Image data={image} />
        </Item>
      ))}
    </Shelf>
  )
}

const Item = styled.li`
  > img {
    display: block;
    width: 100%;
    max-width: 100%;
  }
`
