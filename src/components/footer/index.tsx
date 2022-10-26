import * as React from 'react'
import { Container, Grid, Box } from '@centrifuge/fabric'
import { footer } from '../../../config/footer'
import { Column } from './Column'
import { NewsletterSubscribe } from '../NewsletterSubscribe'

export function Footer() {
  return (
    <Box as="footer" px={2} py={4} backgroundColor="textPrimary">
      <Container>
        <NewsletterSubscribe />
        <Grid as="nav" columns={[1, 2, 4]} gap={6}>
          {footer.map((column, index) => (
            <Column key={`${index}`} {...column} />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
