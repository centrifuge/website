import type { HeadProps } from 'gatsby'
import { graphql } from 'gatsby'
import React from 'react'
import { Text, Stack } from '@centrifuge/fabric'
import { Layout } from '../components/Layout'
import { MarkdownSection } from '../components/MarkdownSection'
import { SEO } from '../components/Seo'

import type { SEOProps } from '../components/Seo'
import type { MarkdownSectionProps } from '../components/MarkdownSection'

export const query = graphql`
  query ($slug: String!) {
    dataJson(slug: { eq: $slug }) {
      title

      seo {
        ...SeoFragment
      }

      markdown_section {
        ...MarkdownSectionFragment
      }
    }
  }
`

type LegalPageProps = {
  data: {
    dataJson: {
      title: string
      seo: SEOProps
      markdown_section: MarkdownSectionProps
    }
  }
}

export default function LegalPage({ data }: LegalPageProps) {
  const { title, markdown_section } = data.dataJson

  return (
    <Layout>
      <Stack px={2} pt={[6, 8, 10]}>
        <Stack maxWidth="containerNarrow" gap={4} mx="auto" width="100%">
          <Text as="h1" variant="heading2b">
            {title}
          </Text>
          <MarkdownSection childMarkdownRemark={markdown_section.childMarkdownRemark} />
        </Stack>
      </Stack>
    </Layout>
  )
}

export const Head = ({ data, location }: LegalPageProps & HeadProps) => {
  const { seo } = data.dataJson
  const { pathname } = location

  return <SEO title={seo.title} pathname={pathname} />
}
