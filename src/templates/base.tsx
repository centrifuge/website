import * as React from 'react'
import type { SectionProps } from '../components/Sections'
import { SEO } from '../components/Seo'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Sections } from '../components/Sections'

type PageProps = {
  pageContext: {
    title: string
    seo: {
      title: string
      description: string
    }
    sections: SectionProps[]
  }
}

export default function Base({ pageContext }: PageProps) {
  const { title, seo, sections } = pageContext

  return (
    <>
      <Header />

      <main>
        <h1>{title}</h1>
        <Sections sections={sections} />
      </main>

      <Footer />
    </>
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
