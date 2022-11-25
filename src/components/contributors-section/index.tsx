import { Box, Text } from '@centrifuge/fabric'
import { graphql } from 'gatsby'
import * as React from 'react'
import { CenterContainer } from '../CenterContainer'
import { ContributorProps } from './Contributor'
import { DesktopCarousel } from './DesktopCarousel'
import { MobileCarousel } from './MobileCarousel'

export const query = graphql`
  fragment ContributorsSectionFragment on DataJsonContributors_section {
    title
    items {
      name
      role
      social
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
  items: ContributorProps[]
}

export function ContributorsSection({ title, items }: ContributorsSectionProps) {
  return (
    <Box as="section">
      <CenterContainer>
        <Text variant="heading2" as="h2">
          {title}
        </Text>
      </CenterContainer>

      <MobileCarousel items={items} />
      <DesktopCarousel items={items} />
    </Box>
  )
}
