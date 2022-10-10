import * as React from 'react'
import aave from '../../images/partner/aave.svg'
import acala from '../../images/partner/acala.svg'
import blocktower from '../../images/partner/blocktower.svg'
import ethereum from '../../images/partner/ethereum.svg'
import maker from '../../images/partner/maker.svg'
import moonbeam from '../../images/partner/moonbeam.svg'
import nomad from '../../images/partner/nomad.svg'
import polkadot from '../../images/partner/polkadot.svg'

type PartnerLogoProps = {
  logoKey: string
}

const logos = {
  aave: aave,
  acala: acala,
  blocktower: blocktower,
  ethereum: ethereum,
  maker: maker,
  moonbeam: moonbeam,
  nomad: nomad,
  polkadot: polkadot,
}

export function PartnerLogo({ logoKey }: PartnerLogoProps) {
  return <img src={logos[logoKey]} alt="" />
}
