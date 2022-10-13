import React from 'react'
import { graphql } from 'gatsby'
import { SEO } from '../components/SEO'
import { Layout } from '../components/Layout'
import { HeroMain } from '../components/hero-main'
import { Testimonials } from '../components/Testimonials'
import { UspSection } from '../components/usp-section'
import type { HeadProps } from 'gatsby'
import type { HeroMainProps } from '../components/hero-main'
import type { TestimonialsProps } from '../components/Testimonials'
import type { UspSectionProps } from '../components/usp-section'

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
    }
  }
`

type HomeProps = {
  data: {
    dataJson: {
      hero_main: HeroMainProps
      testimonials: TestimonialsProps
      usp_section: UspSectionProps
    }
  }
}

export default function Home({ data }: HomeProps) {
  const { hero_main, testimonials, usp_section } = data.dataJson

  return (
    <Layout menuButtonVariant="secondary">
      <HeroMain {...hero_main} />
      <Testimonials {...testimonials} />
      <UspSection {...usp_section} />
    </Layout>
  )
}

export const Head = ({ location }: HeadProps) => {
  const { pathname } = location

  return <SEO pathname={pathname} />
}
