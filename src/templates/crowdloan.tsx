import type { HeadProps } from 'gatsby'
import { graphql } from 'gatsby'
import React from 'react'
import { Stack, Box, Text } from '@centrifuge/fabric'
import { Layout } from '../components/Layout'
import { SEO } from '../components/Seo'
import { HeroCrowdloan } from '../components/hero-crowdloan'
import { StatsCrowdloan } from '../components/StatsCrowdloan'

import type { HeroCrowdloanProps } from '../components/hero-crowdloan'
import type { StatsCrowdloanProps } from '../components/StatsCrowdloan'

import type { SEOProps } from '../components/Seo'
import { CrowdloanUser } from '../components/CrowdloanUser'

export const query = graphql`
  query ($slug: String!) {
    crowdloanJson(slug: { eq: $slug }) {
      seo {
        title
      }

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
      hero_crowdloan: HeroCrowdloanProps
      stats: StatsCrowdloanProps['stats']
    }
  }
}

export default function CrowdloanPage({ data }: CrowdloanPageProps) {
  const { hero_crowdloan, stats } = data.crowdloanJson

  return (
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
  )
}

export const Head = ({ data, location }: CrowdloanPageProps & HeadProps) => {
  const { seo } = data.crowdloanJson
  const { pathname } = location

  return <SEO title={seo.title} pathname={pathname} />
}
