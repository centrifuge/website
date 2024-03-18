import {Stack} from '@centrifuge/fabric'
import type {HeadProps} from 'gatsby'
import {graphql} from 'gatsby'
import * as React from 'react'
import {Layout} from '../components/Layout'
import {SEO, SEOProps} from '../components/Seo'
import {HeroFund, HeroFundProps} from "../components/hero-fund";
import {FundFeatures, FundFeaturesProps} from '../components/FundFeatures'
import {FundUsp, FundUspProps} from '../components/FundUsp'
import {PrimePartners, PrimePartnersProps} from '../components/PrimePartners'
import {RwaYields, RwaYieldsProps} from '../components/RwaYields'
import {PrimeIntegration, PrimeIntegrationProps} from '../components/PrimeIntegration'
import {FundCta, FundCtaProps} from '../components/FundCta'

import {HeroPrimeProps} from "../components/hero-prime";


export const query = graphql`
  query {
    dataJson(slug: { eq: "/fund-management" }) {
      title

      seo {
        ...SeoFragment
      }

      hero_fund {
        ...HeroFundFragment
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

type FundProps = {
  data: {
    dataJson: {
      seo: SEOProps
      hero_fund: HeroFundProps
      prime_partners: PrimePartnersProps
      prime_targets: FundFeaturesProps
      rwa_yields: RwaYieldsProps
      rwa_usp: FundUspProps
      prime_integration: PrimeIntegrationProps
      prime_cta: FundCtaProps
    }
  }
}

export default function FundManagement({data}: FundProps) {
  const {hero_fund, prime_partners, prime_targets, rwa_yields, rwa_usp, prime_integration, prime_cta} = data.dataJson

  return (
    <Layout menuButtonVariant="secondary" padded={false}>
      <Stack gap={['layoutMedium', 'layoutLarge', 'layoutXLarge']}>
        <Stack gap={[10, 10, '120px']}>
          <HeroFund {...hero_fund} />
          <FundFeatures {...prime_targets} />
        </Stack>
        <RwaYields {...rwa_yields} />
        <FundUsp {...rwa_usp} />
        {/*<PrimeIntegration {...prime_integration} />*/}
        <FundCta {...prime_cta} />
      </Stack>
    </Layout>
  )
}

export const Head = ({data, location}: FundProps & HeadProps) => {
  const {seo} = data.dataJson
  const {pathname} = location

  return <SEO title={seo.title} description={seo.description} pathname={pathname}/>
}
