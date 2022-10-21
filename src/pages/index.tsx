import React from 'react'
import { graphql } from 'gatsby'
import { Stack } from '@centrifuge/fabric'
import { SEO } from '../components/Seo'
import { Layout } from '../components/Layout'
import { HeroMain } from '../components/hero-main'
import { Testimonials } from '../components/testimonials'
import { UspSection } from '../components/usp-section'
import { WorkPrinciple } from '../components/work-principle'
import { NewsSection } from '../components/news-section'
import { AuditSection } from '../components/audit-section'
import type { HeadProps } from 'gatsby'
import type { HeroMainProps } from '../components/hero-main'
import type { TestimonialsProps } from '../components/testimonials'
import type { UspSectionProps } from '../components/usp-section'
import type { WorkPrincipleProps } from '../components/work-principle'
import type { NewsSectionProps } from '../components/news-section'
import type { AuditSectionProps } from '../components/audit-section'

export const query = graphql`
  query {
    dataJson(slug: { eq: "/" }) {
      title

      hero_main {
        ...HeroMainFragment
      }

      testimonials {
        ...TestimonialsFragment
      }

      usp_section {
        ...UspSectionFragment
      }

      work_principle {
        ...WorkPrincipleFragment
      }

      news_section {
        ...NewsSectionFragment
      }

      audit_section {
        ...AuditSectionFragment
      }
    }
  }
`

type HomeProps = {
  data: {
    dataJson: {
      hero_main: HeroMainProps
      testimonials: TestimonialsProps
      usp_section: UspSectionProps
      work_principle: WorkPrincipleProps
      news_section: NewsSectionProps
      audit_section: AuditSectionProps
    }
  }
}

export default function Home({ data }: HomeProps) {
  const { hero_main, testimonials, usp_section, work_principle, news_section, audit_section } = data.dataJson

  return (
    <Layout menuButtonVariant="secondary">
      <Stack gap={['layoutSmall', 'layoutMedium', 'layoutLarge']}>
        <HeroMain {...hero_main} />
        <UspSection {...usp_section} />
        <WorkPrinciple {...work_principle} />
        <Testimonials {...testimonials} />
        <NewsSection {...news_section} />
        <AuditSection {...audit_section} />
      </Stack>
    </Layout>
  )
}

export const Head = ({ location }: HeadProps) => {
  const { pathname } = location

  return <SEO pathname={pathname} />
}
