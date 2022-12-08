import * as React from 'react'
import { Container, Stack, Grid, Box } from '@centrifuge/fabric'
import { columns, socials } from '../../../config/footer'
import { NewsletterSubscribe } from '../NewsletterSubscribe'
import { Column } from './Column'
import { ColumnTitle } from './ColumnTitle'
import { Socials, SocialProp } from './Socials'

export function Footer() {
  return (
    <Box as="footer" px={2} py={6} backgroundColor="textPrimary">
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
          alignItems="start"
        >
          <Stack gap={1} gridColumn={['auto', '1/3', '1/3', 'auto', 'auto']}>
            <ColumnTitle>Newsletter</ColumnTitle>
            <NewsletterSubscribe />
          </Stack>

          {columns.map((column, index) => (
            <Column key={`${index}`} {...column} />
          ))}

          <Socials items={socials as SocialProp[]} />
        </Grid>
      </Container>
    </Box>
  )
}
