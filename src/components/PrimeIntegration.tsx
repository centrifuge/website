import * as React from 'react'
import { graphql } from 'gatsby'
import { FeatureSection, FeatureSectionProps } from './feature-section'

export const query = graphql`
  fragment PrimeIntegrationFragment on DataJsonPrime_integration {
    title
    body
    items {
      image {
        publicURL
        extension
      }
      title
      body
    }
  }
`

export type PrimeIntegrationProps = FeatureSectionProps

export function PrimeIntegration(props: PrimeIntegrationProps) {
  return <FeatureSection {...props} />
}
