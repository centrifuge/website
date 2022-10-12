import * as React from 'react'
import { Box, Container, Text } from '@centrifuge/fabric'
import Marquee from 'react-fast-marquee'
import aave from '../../images/partner/aave.svg'
import acala from '../../images/partner/acala.svg'
import blocktower from '../../images/partner/blocktower.svg'
import ethereum from '../../images/partner/ethereum.svg'
import maker from '../../images/partner/maker.svg'
import moonbeam from '../../images/partner/moonbeam.svg'
import nomad from '../../images/partner/nomad.svg'
import polkadot from '../../images/partner/polkadot.svg'
import { useIsOverflow } from '../../hooks/use-is-overflow'
import { List, Image, Inner } from './styles'

type PartnerListProps = {
  partners: PartnerProps[]
}

export type PartnerProps = {
  logo: keyof typeof logos
  alt: string
}

const logos = {
  aave,
  acala,
  blocktower,
  ethereum,
  maker,
  moonbeam,
  nomad,
  polkadot,
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
            <List as="ul" m={0} p={0} gap={4} alignItems="center" role="list" style={{ opacity: isOverflow ? 0 : 1 }}>
              {partners.map(({ logo, alt }, index) => (
                <li key={`${alt}-${index}`}>
                  <Image src={logos[logo]} alt="" />
                </li>
              ))}
            </List>

            {isOverflow && (
              <Marquee gradient={false} speed={200}>
                {partners.map(({ logo, alt }, index) => (
                  <Image key={`${alt}-${index}`} src={logos[logo]} alt="" spaced aria-hidden="true" />
                ))}
              </Marquee>
            )}
          </Box>
        </Inner>
      </Container>
    </Box>
  )
}
