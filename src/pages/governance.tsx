import { Stack } from '@centrifuge/fabric'
import type { HeadProps } from 'gatsby'
import { graphql } from 'gatsby'
import * as React from 'react'
import { HeroGovernance, HeroGovernanceProps } from '../components/hero-governance'
import { Layout } from '../components/Layout'
import { SEO, SEOProps } from '../components/Seo'

export const query = graphql`
  query {
    dataJson(slug: { eq: "/governance" }) {
      title

      seo {
        ...SeoFragment
      }

      hero_governance {
        ...HeroGovernanceFragment
      }
    }
  }
`

type GovernanceProps = {
  data: {
    dataJson: {
      seo: SEOProps
      hero_governance: HeroGovernanceProps
    }
  }
}

export default function Governance({ data }: GovernanceProps) {
  const { hero_governance } = data.dataJson
  return (
    <Layout>
      <Stack gap={168}>
        <HeroGovernance {...hero_governance} />
      </Stack>
    </Layout>
  )
}

export const Head = ({ data, location }: GovernanceProps & HeadProps) => {
  const { seo } = data.dataJson
  const { pathname } = location

  return <SEO title={seo.title} description={seo.description} pathname={pathname} />
}
