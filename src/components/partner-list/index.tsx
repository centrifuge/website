import * as React from 'react'
import { Box } from '@centrifuge/fabric'
import { PartnerLogo } from './PartnerLogo'

type PartnerListProps = {
  partners: PartnerProps[]
}

export type PartnerProps = {
  logo: string
  alt: string
}

export function PartnerList({ partners }: PartnerListProps) {
  return (
    <Box style={{ backgroundColor: 'black' }}>
      <ul>
        {partners.map(({ logo, alt }, index) => (
          <li key={`${alt}-${index}`}>
            <PartnerLogo logoKey={logo} />
          </li>
        ))}
      </ul>
    </Box>
  )
}
