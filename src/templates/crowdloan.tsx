import { UserProvidedConfig } from '@centrifuge/centrifuge-js'
import { Provider } from '@centrifuge/centrifuge-react'
import { Box, Stack, Text } from '@centrifuge/fabric'
import type { HeadProps } from 'gatsby'
import { graphql } from 'gatsby'
import React, { useMemo } from 'react'
import { CrowdloanUser } from '../components/CrowdloanUser'
import type { HeroCrowdloanProps } from '../components/hero-crowdloan'
import { HeroCrowdloan } from '../components/hero-crowdloan'
import { Layout } from '../components/Layout'
import type { SEOProps } from '../components/Seo'
import { SEO } from '../components/Seo'
import type { StatsCrowdloanProps } from '../components/StatsCrowdloan'
import { StatsCrowdloan } from '../components/StatsCrowdloan'

export const query = graphql`
  query ($slug: String!) {
    crowdloanJson(slug: { eq: $slug }) {
      seo {
        title
      }

      network

      hero_crowdloan {
        ...HeroCrowdloanFragment
      }

      stats {
        ...StatsCrowdloanFragment
      }
    }
  }
`

type CrowdloanPageProps = {
  data: {
    crowdloanJson: {
      seo: SEOProps
      network: 'altair' | 'centrifuge'
      hero_crowdloan: HeroCrowdloanProps
      stats: StatsCrowdloanProps['stats']
    }
  }
}

export default function CrowdloanPage({ data }: CrowdloanPageProps) {
  const { hero_crowdloan, stats, network } = data.crowdloanJson
  const centConfig: UserProvidedConfig = useMemo(
    () => ({
      network,
      ...(process.env.NODE_ENV === 'development' && {
        centrifugeWsUrl: 'wss://fullnode.development.cntrfg.com',
        altairWsUrl: 'wss://fullnode.development.cntrfg.com',
      }),
    }),
    []
  )

  return (
    <Provider centrifugeConfig={centConfig}>
      <Layout>
        <Box as="aside" textAlign="center" backgroundColor="accentPrimary" p={2}>
          <Text as="em" variant="body1" color="textInverted" fontStyle="normal">
            Auction ended — Closed for contribution
          </Text>
        </Box>
        <Stack px={2} pt={[4, 6, 8]} gap={[6, 8]}>
          <HeroCrowdloan {...hero_crowdloan} />
          <CrowdloanUser />
          <StatsCrowdloan stats={stats} />
        </Stack>
      </Layout>
    </Provider>
  )
}

export const Head = ({ data, location }: CrowdloanPageProps & HeadProps) => {
  const { seo } = data.crowdloanJson
  const { pathname } = location

  return <SEO title={seo.title} pathname={pathname} />
}
