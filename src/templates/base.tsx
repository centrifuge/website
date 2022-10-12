import * as React from 'react'
import type { SectionProps } from '../components/Sections'
import type { SEOProps } from '../components/SEO'
import type { ButtonVariant } from '../components/desktop-menu/SubMenu'
import { SEO } from '../components/SEO'
import { Sections } from '../components/Sections'
import { Layout } from '../components/Layout'

type PageProps = {
  pageContext: {
    menuButtonVariant?: ButtonVariant
    title: string
    seo: SEOProps
    sections: SectionProps[]
  }
}

export default function Base({ pageContext }: PageProps) {
  const { menuButtonVariant, sections } = pageContext

  return (
    <Layout menuButtonVariant={menuButtonVariant || 'primary'}>
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
