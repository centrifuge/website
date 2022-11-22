import { Box, Stack, Text } from '@centrifuge/fabric'
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
  const n = Math.floor(items.length / 2)
  const firstHalf = items.slice(0, n)
  const secondHalf = items.slice(n)

  return (
    <Box as="section">
      <CenterContainer>
        <Text variant="heading2" as="h2">
          {title}
        </Text>
      </CenterContainer>

      <MobileCarousel items={items} />

      <Stack gap={6}>
        {[firstHalf, secondHalf].map((chunk, index) => (
          <DesktopCarousel
            key={chunk[0].name}
            items={chunk}
            align={index % 2 === 0 ? 'start' : 1 / n / 2}
            flipped={index > 0}
          />
        ))}
      </Stack>
    </Box>
  )
}
