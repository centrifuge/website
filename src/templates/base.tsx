import * as React from 'react'
import type { SectionProps } from '../components/Sections'
import type { SEOProps } from '../components/SEO'
import { SEO } from '../components/SEO'
import { Sections } from '../components/Sections'
import { Layout } from '../components/Layout'

type PageProps = {
  pageContext: {
    title: string
    seo: SEOProps
    sections: SectionProps[]
  }
}

export default function Base({ pageContext }: PageProps) {
  const { title, sections } = pageContext

  return (
    <Layout>
      <h1>{title}</h1>
      <Sections sections={sections} />
    </Layout>
  )
}

type HeadProps = PageProps & {
  location: { pathname: string }
}

export const Head = ({ pageContext, location }: HeadProps) => {
  const { seo } = pageContext
  const { pathname } = location

  return <SEO title={seo?.title} description={seo?.description} pathname={pathname} />
}
