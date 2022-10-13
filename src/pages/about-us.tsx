import { Stack } from '@centrifuge/fabric'
import * as React from 'react'
import { graphql } from 'gatsby'
import type { HeadProps } from 'gatsby'

import { SEO } from '../components/Seo'
import { Layout } from '../components/Layout'
import { BeliefsSection } from '../components/BeliefsSection'
import { HeroVideo } from '../components/HeroVideo'
import { OrgSection } from '../components/org-section'
import { ValuesSection } from '../components/ValuesSection'

import type { SEOProps } from '../components/Seo'
import type { HeroVideoProps } from '../components/HeroVideo'
import type { OrgSectionProps } from '../components/org-section'
import type { ValuesSectionProps } from '../components/ValuesSection'
import type { BeliefsSectionProps } from '../components/BeliefsSection'

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
    }
  }
}

export default function About({ data }: AboutProps) {
  const { hero_video, org_section, value_section, beliefs_section } = data.dataJson

  return (
    <Layout>
      <Stack gap={168}>
        <HeroVideo {...hero_video} />
        <OrgSection {...org_section} />
        <ValuesSection {...value_section} />
        <BeliefsSection {...beliefs_section} />
      </Stack>
    </Layout>
  )
}

export const Head = ({ data, location }: AboutProps & HeadProps) => {
  const { seo } = data.dataJson
  const { pathname } = location

  return <SEO title={seo.title} description={seo.description} pathname={pathname} />
}
