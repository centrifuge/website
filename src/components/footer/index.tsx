import * as React from 'react'
import { Container, Shelf, Grid } from '@centrifuge/fabric'
import { footer } from '../../../config/footer'
import { Column } from './Column'
import { Root } from './styles'

export function Footer() {
  return (
    <Root as="footer" px={2} py={4}>
      <Container>
        <Grid as="nav" columns={[1, 2, 4]} gap={6}>
          {footer.map((column, index) => (
            <Column key={`${index}`} {...column} />
          ))}
        </Grid>
      </Container>
    </Root>
  )
}
