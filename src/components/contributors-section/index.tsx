import { AnchorButton, Box, Text } from '@centrifuge/fabric'
import { graphql } from 'gatsby'
import * as React from 'react'
import { CenterContainer } from '../CenterContainer'
import { ContributorProps } from './Contributor'
import { DesktopCarousel } from './DesktopCarousel'
import { MobileCarousel } from './MobileCarousel'

export const query = graphql`
  fragment ContributorsSectionFragment on DataJsonContributors_section {
    title
    cta {
      body
      label
      href
    }
    items {
      name
      role
      social
      entity {
        name
        href
      }
      image {
        childImageSharp {
          gatsbyImageData(
            transformOptions: { cropFocus: CENTER, duotone: { highlight: "#ffffff", shadow: "#0038CC" } }
            height: 460
            width: 660
            placeholder: BLURRED
          )
        }
      }
    }
  }
`

export type ContributorsSectionProps = {
  title: string
  cta: {
    body: string
    label: string
    href: string
  }
  items: ContributorProps[]
}

export function ContributorsSection({ title, cta, items }: ContributorsSectionProps) {
  return (
    <Box as="section">
      <CenterContainer>
        <Text variant="heading2" as="h2">
          {title}
        </Text>
      </CenterContainer>

      <MobileCarousel items={items} />
      <DesktopCarousel items={items} />

      {cta && (
        <CenterContainer textAlign="center" mt={6}>
          <Text variant="body2" as="p" style={{ marginBottom: '1em' }}>
            {cta.body}
          </Text>
          <AnchorButton href={cta.href} variant="secondary" small target="_blank">
            {cta.label}
          </AnchorButton>
        </CenterContainer>
      )}
    </Box>
  )
}
