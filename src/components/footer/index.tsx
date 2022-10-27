import * as React from 'react'
import { Container, Grid, Box, Text } from '@centrifuge/fabric'
import { footer } from '../../../config/footer'
import { Column } from './Column'

export function Footer() {
  return (
    <Box as="footer" px={2} py={4} backgroundColor="textPrimary">
      <Container>
        <Grid as="nav" columns={[1, 2, 4]} gap={6}>
          {footer.map((column, index) => (
            <Column key={`${index}`} {...column} />
          ))}
        </Grid>
        <Box mt={8} pt={4} borderWidth={0} borderTopWidth={1} borderColor="textSecondary" borderStyle="solid">
          <Text variant="body3" color="textDisabled">
            <Box
              as="img"
              src={'/centrifuge-logomark.svg'}
              alt=""
              display="inline-block"
              width="1.5em"
              height="1.5em"
              mr="0.5em"
              verticalAlign="bottom"
            />
            Centrifuge | Except where otherwise noted, content on this site is licensed under a{' '}
            <Text
              as="a"
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creative Commons Attribution-ShareAlike 4.0 International
            </Text>{' '}
            license
          </Text>
        </Box>
      </Container>
    </Box>
  )
}
