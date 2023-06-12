import { graphql } from 'gatsby'
import * as React from 'react'
import { FeatureSection, FeatureSectionProps } from './feature-section'

export const query = graphql`
  fragment OrgSectionFragment on DataJsonOrg_section {
    title
    items {
      title
      body
      image {
        publicURL
        extension
      }
    }
  }
`

export type OrgSectionProps = Omit<FeatureSectionProps, 'body'>

export function OrgSection(props: OrgSectionProps) {
  return <FeatureSection {...props} />
}
