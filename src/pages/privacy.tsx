import { Stack } from '@centrifuge/fabric'
import type { HeadProps } from 'gatsby'
import { graphql } from 'gatsby'
import * as React from 'react'
import { Layout } from '../components/Layout'
import { PrivacySection, PrivacySectionProps } from '../components/PrivacySection'
import { SEO, SEOProps } from '../components/Seo'

export const query = graphql`
  query {
    dataJson(slug: { eq: "/privacy" }) {
      title

      seo {
        ...SeoFragment
      }

      privacy_section {
        ...PrivacySectionFragment
      }
    }
  }
`

type PrivacyProps = {
  data: {
    dataJson: {
      seo: SEOProps
      privacy_section: PrivacySectionProps
    }
  }
}

export default function Privacy({ data }: PrivacyProps) {
  const { privacy_section } = data.dataJson
  return (
    <Layout>
      <Stack gap={['layoutSmall', 'layoutMedium', 'layoutLarge']}>
        <PrivacySection {...privacy_section} />
      </Stack>
    </Layout>
  )
}

export const Head = ({ data, location }: PrivacyProps & HeadProps) => {
  const { seo } = data.dataJson
  const { pathname } = location

  return <SEO title={seo.title} description={seo.description} pathname={pathname} />
}
