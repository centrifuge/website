import * as React from 'react'
import { Container, Stack, Grid, Box } from '@centrifuge/fabric'
import { footer } from '../../../config/footer'
import { Column } from './Column'
import { ColumnTitle } from './ColumnTitle'
import { NewsletterSubscribe } from '../NewsletterSubscribe'

export function Footer() {
  return (
    <Box as="footer" px={2} py={4} backgroundColor="textPrimary">
      <Container maxWidth="containerHeader">
        <Grid
          as="nav"
          gridTemplateColumns={[
            '1fr',
            'repeat(2, minmax(0, 1fr))',
            'repeat(3, minmax(0, 1fr))',
            'repeat(4, minmax(0, 1fr))',
            'repeat(5, minmax(0, 1fr))',
          ]}
          gap={6}
        >
          <Stack gap={1} gridColumn={['auto', '1/3', '1/3', 'auto', 'auto']}>
            <ColumnTitle>Newsletter</ColumnTitle>
            <NewsletterSubscribe />
          </Stack>

          {footer.map((column, index) => (
            <Column key={`${index}`} {...column} />
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
