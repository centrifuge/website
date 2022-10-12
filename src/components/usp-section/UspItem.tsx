import React from 'react'
import { Box, Grid, Text } from '@centrifuge/fabric'
import { ItemContent, Image } from './styles'

import costs from '../../images/usps/costs.svg'
import diversification from '../../images/usps/diversification.svg'
import liquidity from '../../images/usps/liquidity.svg'
import participation from '../../images/usps/participation.svg'
import security from '../../images/usps/security.svg'
import transparency from '../../images/usps/transparency.svg'

const images = {
  costs: costs,
  diversification: diversification,
  liquidity: liquidity,
  participation: participation,
  security: security,
  transparency: transparency,
}

export type UspItemProps = {
  title: string
  body: string
  image: keyof typeof images
}

export function UspItem({ title, body, image }: UspItemProps) {
  return (
    <Grid gridTemplateColumns={['64px 1fr', '64px 1fr', '64px 1fr', '160px 1fr']} gap={2}>
      <Image src={images[image]} alt="" />
      <ItemContent pt={1} gap={2}>
        <Text as="h3" variant="heading4">
          {title}
        </Text>
        <Text as="p" variant="body2">
          {body}
        </Text>
      </ItemContent>
    </Grid>
  )
}
