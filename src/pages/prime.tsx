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

      prime_partners {
        ...PrimePartnersFragment
      }

      prime_integration {
        ...PrimeIntegrationFragment
      }

      rwa_usp {
        ...RwaUspFragment
      }

      rwa_yields {
        ...RwaYieldsFragment
      }

      prime_targets {
        ...PrimeTargetsFragment
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
      prime_partners: PrimePartnersProps
      prime_integration: PrimeIntegrationProps
      rwa_usp: RwaUspProps
      rwa_yields: RwaYieldsProps
      prime_targets: PrimeTargetsProps
      prime_cta: PrimeCtaProps
    }
  }
}

export default function Prime({ data }: PrimeProps) {
  const { hero_prime, prime_partners, prime_integration, rwa_usp, rwa_yields, prime_targets, prime_cta } = data.dataJson

  return (
    <Layout menuButtonVariant="secondary" padded={false}>
      <Stack gap={['layoutMedium', 'layoutLarge', 'layoutXLarge']}>
        <Stack gap={[10, 10, 'layoutMedium']}>
          <HeroPrime {...hero_prime} />
          <PrimePartners {...prime_partners} />
        </Stack>
        <PrimeIntegration {...prime_integration} />
        <RwaUsp {...rwa_usp} />
        <RwaYields {...rwa_yields} />
        <PrimeTargets {...prime_targets} />
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
