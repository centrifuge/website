import * as React from 'react'
import { Box, Stack, Text } from '@centrifuge/fabric'
import type { HeadProps } from 'gatsby'
import { graphql } from 'gatsby'
import type { CrowdloanUserProps } from '../components/crowdloan-user'
import type { HeroCrowdloanProps } from '../components/hero-crowdloan'
import { HeroCrowdloan } from '../components/hero-crowdloan'
import { Layout } from '../components/Layout'
import type { SEOProps } from '../components/Seo'
import { SEO } from '../components/Seo'
import type { StatsCrowdloanProps } from '../components/StatsCrowdloan'
import { StatsCrowdloan } from '../components/StatsCrowdloan'

const CrowdloanUser = React.lazy(() => import('../components/crowdloan-user'))

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
      network: CrowdloanUserProps['network']
      hero_crowdloan: HeroCrowdloanProps
      stats: StatsCrowdloanProps['stats']
    }
  }
}

export default function CrowdloanPage({ data }: CrowdloanPageProps) {
  const [isRendered, setIsRendered] = React.useState(false)
  const { hero_crowdloan, stats, network } = data.crowdloanJson

  React.useEffect(() => setIsRendered(true), [])

  return (
    <Layout>
      <Box as="aside" textAlign="center" backgroundColor="accentPrimary" p={2}>
        <Text as="em" variant="body1" color="textInverted" fontStyle="normal">
          Auction ended — Closed for contribution
        </Text>
      </Box>
      <Stack px={2} pt={[4, 6, 8]} gap={[6, 8]}>
        <HeroCrowdloan {...hero_crowdloan} />
        {isRendered ? <CrowdloanUser network={network} /> : null}
        <StatsCrowdloan stats={stats} />
      </Stack>
    </Layout>
  )
}

export const Head = ({ data, location }: CrowdloanPageProps & HeadProps) => {
  const { seo } = data.crowdloanJson
  const { pathname } = location

  return <SEO title={seo.title} pathname={pathname} />
}
