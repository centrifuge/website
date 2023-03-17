import { Stack, Container, Grid } from '@centrifuge/fabric'
import * as React from 'react'
import { graphql } from 'gatsby'

import { toLocaleDate } from '../utils/date'
import { Layout } from '../components/Layout'
import { SEO } from '../components/Seo'
import { VisuallyHidden } from '../components/VisuallyHidden'
import { NewsCard, PostProps } from '../components/news-card'
import { Reveal, RevealWrapper } from '../components/Reveal'

import type { SEOProps } from '../components/Seo'
import type { HeadProps } from 'gatsby'

export const query = graphql`
  query {
    dataJson(slug: { eq: "/news" }) {
      title

      seo {
        ...SeoFragment
      }
    }

    allPostsJson {
      ...NewsCardFragment
    }
  }
`

type NewsProps = {
  data: {
    dataJson: {
      title: string
      seo: SEOProps
    }
    allPostsJson: {
      nodes: PostProps[]
    }
  }
}

export default function News({ data }: NewsProps) {
  const { title } = data.dataJson
  const { nodes: posts } = data.allPostsJson

  const sortedByDate = posts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(({ date, ...rest }) => ({ date: toLocaleDate(new Date(date)), ...rest }))

  const featured = sortedByDate[0]
  const list = sortedByDate.slice(1)

  return (
    <Layout>
      <VisuallyHidden as="h1">{title}</VisuallyHidden>

      <RevealWrapper>
        <Stack mt={[2, 4, 6]} gap={[6]} as={Container} maxWidth="containerNarrow">
          <Reveal as="section" px={2}>
            <NewsCard
              date={featured.date}
              outlet={featured.outlet}
              title={featured.title}
              body={featured.body}
              image={featured.image}
              alt={featured.alt}
              href={featured.href}
              featured
            />
          </Reveal>

          <Reveal
            staggerIndex={1}
            as="hr"
            mx={2}
            borderColor="borderPrimary"
            borderStyle="solid"
            borderWidth={0}
            borderBottomWidth={1}
          />

          <Grid
            as="ul"
            px={2}
            gridTemplateColumns={['1fr', '1fr', 'repeat(2, minmax(0, 1fr))', 'repeat(3, minmax(0, 1fr))']}
            gap={[4, 4, 4, 6]}
            rowGap={[6, 6, 6, 10]}
          >
            {!!list?.length &&
              list.map((post, index) => (
                <Reveal as="li" staggerIndex={2 + index} key={post.id}>
                  <NewsCard
                    date={post.date}
                    outlet={post.outlet}
                    title={post.title}
                    body={post.body}
                    image={post.image}
                    alt={post.alt}
                    href={post.href}
                  />
                </Reveal>
              ))}
          </Grid>
        </Stack>
      </RevealWrapper>
    </Layout>
  )
}

export const Head = ({ data, location }: NewsProps & HeadProps) => {
  const { seo } = data.dataJson
  const { pathname } = location

  return <SEO title={seo.title} description={seo.description} pathname={pathname} />
}
