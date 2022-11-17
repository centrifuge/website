import React from 'react'
import { graphql } from 'gatsby'
import { Text, Box, Container, Shelf, IconArrowLeft, IconArrowRight } from '@centrifuge/fabric'
import { useMediumPosts } from '../hooks/use-medium-posts'
import { useCarousel } from '../hooks/use-carousel'
import { toLocaleDate } from '../utils/date'
import { InternalLink } from './InternalLink'
import { NoteCard } from './NoteCard'
import { NewsCard } from './news-card'
import { Control } from './Control'

export const query = graphql`
  fragment NewsSectionFragment on DataJsonNews_section {
    title
    count
    link {
      label
      href
    }
    note {
      title
      body
    }
  }
`

export type NewsSectionProps = {
  title: string
  count: number
  link: { label: string; href: string }
  note: { title: string; body: string }
}

export function NewsSection({ title, count, link, note }: NewsSectionProps) {
  const { isLoading, isError, posts } = useMediumPosts(count)

  const { viewportRef, prevBtnEnabled, nextBtnEnabled, scrollPrev, scrollNext } = useCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  })

  return (
    <Box as="section" px={2} style={{ overflow: 'hidden' }}>
      <Container>
        <Shelf alignItems="center" flexWrap="wrap" gap={4} rowGap={[4, 4, 0]}>
          <Text as="h2" variant="heading2">
            {title}
          </Text>
          <InternalLink to={link.href} variant="secondary" small>
            {link.label}
          </InternalLink>

          {!isError && (
            <Shelf gap={2} ml="auto" width={['100%', '100%', 'auto']} justifyContent="end">
              <Control onClick={scrollPrev} disabled={!prevBtnEnabled} title="Previous">
                <IconArrowLeft />
              </Control>
              <Control onClick={scrollNext} disabled={!nextBtnEnabled} title="Next">
                <IconArrowRight />
              </Control>
            </Shelf>
          )}
        </Shelf>

        {!isError ? (
          <Box ref={viewportRef} style={{ overflow: 'visible' }} mt={[1, 1, 6]} py={1}>
            <Shelf as="ul" p={0} m={0} role="list" gap={2} alignItems="normal">
              {posts.map(({ guid, title, link, thumbnail, description, pubDate }, index) => (
                <Box as="li" key={`${guid}${index}`} width={[300, 400, 480]} flexShrink={0}>
                  <NewsCard
                    label={isLoading ? pubDate : toLocaleDate(pubDate)}
                    title={title}
                    body={description}
                    image={thumbnail}
                    href={link}
                    boxed
                    isLoading={isLoading}
                  />
                </Box>
              ))}
            </Shelf>
          </Box>
        ) : (
          <NoteCard status="info" mt={[1, 1, 6]}>
            <Text as="strong" variant="heading6">
              {note.title}
            </Text>
            <Text as="p" variant="body1">
              {note.body}
            </Text>
          </NoteCard>
        )}
      </Container>
    </Box>
  )
}
