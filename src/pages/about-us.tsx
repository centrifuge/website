import { Stack } from '@centrifuge/fabric'
import type { HeadProps } from 'gatsby'
import { graphql } from 'gatsby'
import * as React from 'react'

import { BeliefsSection, BeliefsSectionProps } from '../components/BeliefsSection'
import { ContributorsSection, ContributorsSectionProps } from '../components/ContributorsSection'
import { HeroVideo, HeroVideoProps } from '../components/HeroVideo'
import { Layout } from '../components/Layout'
import { OrgSection, OrgSectionProps } from '../components/org-section'
import { SEO, SEOProps } from '../components/Seo'
import { ValuesSection, ValuesSectionProps } from '../components/ValuesSection'

export const query = graphql`
  query {
    dataJson(slug: { eq: "/about-us" }) {
      title

      seo {
        ...SeoFragment
      }

      hero_video {
        ...HeroVideoFragment
      }

      org_section {
        ...OrgSectionFragment
      }

      value_section {
        ...ValuesSectionFragment
      }

      beliefs_section {
        ...BeliefsSectionFragment
      }

      contributors_section {
        ...ContributorsSectionFragment
      }
    }
  }
`

type AboutProps = {
  data: {
    dataJson: {
      seo: SEOProps
      hero_video: HeroVideoProps
      org_section: OrgSectionProps
      value_section: ValuesSectionProps
      beliefs_section: BeliefsSectionProps
      contributors_section: ContributorsSectionProps
    }
  }
}

export default function About({ data }: AboutProps) {
  const { hero_video, org_section, value_section, beliefs_section, contributors_section } = data.dataJson

  return (
    <Layout>
      <Stack gap={168}>
        <HeroVideo {...hero_video} />
        <OrgSection {...org_section} />
        <ValuesSection {...value_section} />
        <BeliefsSection {...beliefs_section} />
        <ContributorsSection {...contributors_section} />
      </Stack>
    </Layout>
  )
}

export const Head = ({ data, location }: AboutProps & HeadProps) => {
  const { seo } = data.dataJson
  const { pathname } = location

  return <SEO title={seo.title} description={seo.description} pathname={pathname} />
}
