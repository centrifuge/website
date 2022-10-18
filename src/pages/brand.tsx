import { Stack } from '@centrifuge/fabric'
import * as React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { SEO } from '../components/Seo'
import { BrandSection } from '../components/brand-section'

import type { SEOProps } from '../components/Seo'
import type { HeadProps } from 'gatsby'
import type { BrandSectionProps } from '../components/brand-section'

export const query = graphql`
  query {
    dataJson(slug: { eq: "/brand" }) {
      title

      seo {
        ...SeoFragment
      }

      brands {
        ...BrandSectionFragment
      }
    }
  }
`

type BrandProps = {
  data: {
    dataJson: {
      title: string
      seo: SEOProps
      brands: BrandSectionProps[]
    }
  }
}

export default function Brand({ data }: BrandProps) {
  const { brands, title } = data.dataJson

  return (
    <Layout>
      <h1 className="sr-only">{title}</h1>
      <Stack gap={['layoutSmall', 'layoutMedium', 'layoutLarge']} mt={8}>
        {brands.map((brand, index) => (
          <BrandSection key={`${brand.title}${index}`} {...brand} />
        ))}
      </Stack>
    </Layout>
  )
}

export const Head = ({ data, location }: BrandProps & HeadProps) => {
  const { seo } = data.dataJson
  const { pathname } = location

  return <SEO title={seo.title} description={seo.description} pathname={pathname} />
}
