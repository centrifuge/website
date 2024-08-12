import { Stack } from '@centrifuge/fabric'
import type { HeadProps } from 'gatsby'
import { graphql } from 'gatsby'
import * as React from 'react'
import { Layout } from '../components/Layout'
import { SEO, SEOProps } from '../components/Seo'
import { HeroFund, HeroFundProps } from '../components/hero-fund'
import { FundFeatures, FundFeaturesProps } from '../components/FundFeatures'
import { RwaYields, RwaYieldsProps } from '../components/RwaYields'
import { FundCta, FundCtaProps } from '../components/FundCta'
import { Morpho, MorphoProps } from '../components/Morpho'

export const query = graphql`
  query {
    dataJson(slug: { eq: "/rwa-market" }) {
      hero_fund {
        ...HeroFundFragment
      }

      fund_features {
        ...FundFeaturesFragment
      }

      rwa_yields {
        ...RwaYieldsFragment
      }

      morpho {
        ...MorphoFragment
      }

      fund_cta {
        ...FundCtaFragment
      }
    }
  }
`

type RWAMarketProps = {
  data: {
    dataJson: {
      seo: SEOProps
      hero_fund: HeroFundProps
      fund_features: FundFeaturesProps
      rwa_yields: RwaYieldsProps
      morpho: MorphoProps
      fund_cta: FundCtaProps
    }
  }
}

export default function RWAMarket({ data }: RWAMarketProps) {
  const { hero_fund, fund_features, rwa_yields, morpho, fund_cta } = data.dataJson

  return (
    <Layout menuButtonVariant="secondary" padded={false}>
      <Stack gap={['layoutMedium', 'layoutLarge', 'layoutXLarge']}>
        <Stack gap={[10, 10, '120px']}>
          <HeroFund {...hero_fund} />
          <FundFeatures {...fund_features} showButton={false} columns={[1, 2, 3, 4]} />
        </Stack>
        <RwaYields {...rwa_yields} />
        <Morpho {...morpho} />
        <FundCta {...fund_cta} />
      </Stack>
    </Layout>
  )
}

export const Head = ({ data, location }: RWAMarketProps & HeadProps) => {
  const { seo } = data.dataJson
  const { pathname } = location

  return <SEO title={seo.title} description={seo.description} pathname={pathname} />
}
