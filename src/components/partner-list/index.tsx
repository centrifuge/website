import * as React from 'react'
import { Box, Container, Text, Shelf } from '@centrifuge/fabric'
import Marquee from 'react-fast-marquee'
import { useIsOverflow } from '../../hooks/use-is-overflow'
import { Inner } from './styles'
import { Image } from '../Image'
import type { ImageProps } from '../Image'

type PartnerListProps = {
  partners: PartnerProps[]
}

export type PartnerProps = {
  image: ImageProps
  alt: string
}

export function PartnerList({ partners }: PartnerListProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const isOverflow = useIsOverflow(ref)

  return (
    <Box p={2} backgroundColor="textPrimary">
      <Container maxWidth="container">
        <Inner gap={2} ref={ref}>
          <Text as="span" color="textInverted" variant="body3">
            Working with:
          </Text>

          <Box position="relative">
            <Shelf as="ul" m={0} p={0} gap={4} alignItems="center" role="list" style={{ opacity: isOverflow ? 0 : 1 }}>
              {partners.map(({ image, alt }, index) => (
                <li key={`${alt}-${index}`}>
                  <Image data={image} />
                </li>
              ))}
            </Shelf>

            {isOverflow && (
              <Marquee gradient={false} speed={200}>
                {partners.map(({ image, alt }, index) => (
                  <Image key={`${alt}-${index}`} data={image} />
                ))}
              </Marquee>
            )}
          </Box>
        </Inner>
      </Container>
    </Box>
  )
}
