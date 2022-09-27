import * as React from 'react'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Sections } from '../components/Sections'

type PageProps = {
  pageContext: {
    title: string
    seo: {
      description: string
    }
    sections: { type: string }[]
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
