import * as React from 'react'
import { ImageProps, Image } from '../Image'
import { Shelf } from '@centrifuge/fabric'
import { Media } from './styles'

type LogoListProps = {
  items: {
    image: ImageProps
    alt?: string
  }[]
}

export function LogoList({ items }: LogoListProps) {
  return (
    <Shelf as="ul" role="list" justifyContent="center" alignItems="center" flexWrap="wrap" gap={[4, 6]} rowGap={[4, 4]}>
      {items.map((entry, index) => (
        <Media key={index} as="li">
          <Image data={entry.image} alt={entry.alt || ''} />
        </Media>
      ))}
    </Shelf>
  )
}
