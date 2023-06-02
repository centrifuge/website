import { Stack } from '@centrifuge/fabric'
import type { HeadProps } from 'gatsby'
import { graphql } from 'gatsby'
import * as React from 'react'
import { Layout } from '../components/Layout'
import { SEO, SEOProps } from '../components/Seo'
import { HeroPrime, HeroPrimeProps } from '../components/hero-prime'
import { PrimeTargets, PrimeTargetsProps } from '../components/PrimeTargets'
import { RwaUsp, RwaUspProps } from '../components/RwaUsp'
import { PrimePartners, PrimePartnersProps } from '../components/PrimePartners'
import { RwaYields, RwaYieldsProps } from '../components/RwaYields'
import { PrimeIntegration, PrimeIntegrationProps } from '../components/PrimeIntegration'
import { PrimeCta, PrimeCtaProps } from '../components/PrimeCta'

export const query = graphql`
  query {
    dataJson(slug: { eq: "/prime" }) {
      title

      seo {
        ...SeoFragment
      }

      hero_prime {
        ...HeroPrimeFragment
      }

      prime_integration {
        ...PrimeIntegrationFragment
      }

      prime_partners {
        ...PrimePartnersFragment
      }

      prime_targets {
        ...PrimeTargetsFragment
      }

      rwa_usp {
        ...RwaUspFragment
      }

      rwa_yields {
        ...RwaYieldsFragment
      }

      prime_cta {
        ...PrimeCtaFragment
      }
    }
  }
`

type PrimeProps = {
  data: {
    dataJson: {
      seo: SEOProps
      hero_prime: HeroPrimeProps
      prime_integration: PrimeIntegrationProps
      prime_partners: PrimePartnersProps
      prime_targets: PrimeTargetsProps
      rwa_usp: RwaUspProps
      rwa_yields: RwaYieldsProps
      prime_cta: PrimeCtaProps
    }
  }
}

export default function Prime({ data }: PrimeProps) {
  const { hero_prime, prime_integration, prime_partners, prime_targets, rwa_usp, rwa_yields, prime_cta } = data.dataJson

  return (
    <Layout menuButtonVariant="secondary" padded={false}>
      <Stack gap={['layoutMedium', 'layoutLarge', 'layoutXLarge']}>
        <HeroPrime {...hero_prime} />
        <PrimeIntegration {...prime_integration} />
        <PrimePartners {...prime_partners} />
        <PrimeTargets {...prime_targets} />
        <RwaUsp {...rwa_usp} />
        <RwaYields {...rwa_yields} />
        <PrimeCta {...prime_cta} />
      </Stack>
    </Layout>
  )
}

export const Head = ({ data, location }: PrimeProps & HeadProps) => {
  const { seo } = data.dataJson
  const { pathname } = location

  return <SEO title={seo.title} description={seo.description} pathname={pathname} />
}
