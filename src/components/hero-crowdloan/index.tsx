import React from 'react'
import { graphql } from 'gatsby'
import { Container, Box, Text, AnchorButton } from '@centrifuge/fabric'

export const query = graphql`
  fragment HeroCrowdloanFragment on CrowdloanJsonHero_crowdloan {
    title
    amount
    contributors
    anchor {
      label
      href
    }
  }
`

export type HeroCrowdloanProps = {
  title: string
  amount: string
  contributors: string
  anchor?: {
    label: string
    href: string
  }
}

export function HeroCrowdloan({ title, amount, contributors, anchor }: HeroCrowdloanProps) {
  return (
    <Container as="section">
      <Text as="span" variant="tag">
        Crowdloan
      </Text>
      <Text as="h1" variant="heading2b">
        {title}
      </Text>
      <Text as="p" variant="heading6" style={{ marginTop: '.7em' }}>
        <Em>{amount}</Em> raised from <Em>{contributors}</Em> contributions
      </Text>
      {anchor && (
        <Box mt={4}>
          <AnchorButton href={anchor.href} rel="noopener noreferrer" target="_blank" variant="secondary" small>
            {anchor.label}
          </AnchorButton>
        </Box>
      )}
    </Container>
  )
}

function Em({ children }: { children: React.ReactNode }) {
  return (
    <Text as="em" fontStyle="normal" variant="heading5">
      {children}
    </Text>
  )
}
