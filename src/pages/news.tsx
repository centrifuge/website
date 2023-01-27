import { Text, Stack, Box, Container, Grid } from '@centrifuge/fabric'
import * as React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import { SEO } from '../components/Seo'
import { VisuallyHidden } from '../components/VisuallyHidden'
import { NewsCard } from '../components/news-card'
import { Reveal, RevealWrapper } from '../components/Reveal'
import { useMediumPosts } from '../hooks/use-medium-posts'
import { toLocaleDate } from '../utils/date'

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
  }
`

type NewsProps = {
  data: {
    dataJson: {
      title: string
      seo: SEOProps
    }
  }
}

export default function News({ data }: NewsProps) {
  const { title } = data.dataJson
  const { isLoading, isError, posts } = useMediumPosts()
  console.log('posts', posts)
  const featured = posts[0]
  const list = posts.slice(1)

  return (
    <Layout>
      <VisuallyHidden as="h1">{title}</VisuallyHidden>

      <RevealWrapper>
        <Stack mt={[2, 4, 6]} gap={[6]} as={Container} maxWidth="containerNarrow">
          <Reveal as="section" px={2}>
            <NewsCard
              label={!!featured.pubDate ? toLocaleDate(featured.pubDate.replace(' ', 'T')) : ' '}
              title={featured.title}
              body={featured.description}
              image={featured.thumbnail}
              href={featured.link}
              isLoading={isLoading}
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
                <Reveal as="li" staggerIndex={2 + index}>
                  <NewsCard
                    label={!!post.pubDate ? toLocaleDate(post.pubDate.replace(' ', 'T')) : ' '}
                    title={post.title}
                    body={post.description}
                    image={post.thumbnail}
                    href={post.link}
                    isLoading={isLoading}
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
