import * as React from 'react'
import type { SectionProps } from '../components/Sections'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Sections } from '../components/Sections'

type PageProps = {
  pageContext: {
    title: string
    seo: {
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
