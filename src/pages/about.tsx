import { AnchorButton, Stack } from '@centrifuge/fabric'
import type { HeadProps } from 'gatsby'
import { graphql } from 'gatsby'
import * as React from 'react'

import { useLeverPositions } from '../hooks/use-lever-positions'
import { BeliefsSection, BeliefsSectionProps } from '../components/BeliefsSection'
import { ContributorsSection, ContributorsSectionProps } from '../components/contributors-section'
import { HeroVideo, HeroVideoProps } from '../components/HeroVideo'
import { Layout } from '../components/Layout'
import { OrgSection, OrgSectionProps } from '../components/org-section'
import { SEO, SEOProps } from '../components/Seo'
import { MakerSection, MakerSectionProps } from '../components/MakerSection'
import { CareerSection, CareerSectionProps } from '../components/career-section'

export const query = graphql`
  query {
    dataJson(slug: { eq: "/about" }) {
      title

      seo {
        ...SeoFragment
      }

      hero_video {
        ...HeroVideoFragment
      }

      maker_section {
        ...MakerSectionFragment
      }

      org_section {
        ...OrgSectionFragment
      }

      beliefs_section {
        ...BeliefsSectionFragment
      }

      contributors_section {
        ...ContributorsSectionFragment
      }

      career_section {
        ...CareerSectionFragment
      }
    }
  }
`

type ContributorsProps = {
  data: {
    dataJson: {
      seo: SEOProps
      hero_video: HeroVideoProps
      maker_section: MakerSectionProps
      org_section: OrgSectionProps
      beliefs_section: BeliefsSectionProps
      contributors_section: ContributorsSectionProps
      career_section: CareerSectionProps
    }
  }
}

export default function Contributors({ data }: ContributorsProps) {
  const { positions } = useLeverPositions()
  const careersId = 'careers'
  const { hero_video, maker_section, org_section, beliefs_section, contributors_section, career_section } =
    data.dataJson

  return (
    <Layout>
      <Stack gap={168}>
        <HeroVideo {...hero_video}>
          {!!positions?.length && (
            <AnchorButton href={`#${careersId}`} variant="secondary">
              We are hiring 🚀
            </AnchorButton>
          )}
        </HeroVideo>
        <MakerSection {...maker_section} />
        <ContributorsSection {...contributors_section} />
        <OrgSection {...org_section} />
        <BeliefsSection {...beliefs_section} />
        <CareerSection {...career_section} id={careersId} />
      </Stack>
    </Layout>
  )
}

export const Head = ({ data, location }: ContributorsProps & HeadProps) => {
  const { seo } = data.dataJson
  const { pathname } = location

  return <SEO title={seo.title} description={seo.description} pathname={pathname} />
}
