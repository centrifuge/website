import React from 'react'
import { graphql } from 'gatsby'
import { Text, Box, Container, Shelf } from '@centrifuge/fabric'
import useEmblaCarousel from 'embla-carousel-react'
import { useMediumPosts } from '../../hooks/use-medium-posts'
import { toLocaleDate } from '../../utils/date'
import { InternalLink } from '../InternalLink'
import { NewsCard } from '../news-card'
import { NoteCard } from '../NoteCard'
import { Arrow, Control } from './styles'

export const query = graphql`
  fragment NewsSectionFragment on DataJsonNews_section {
    title
    count
  }
`

export type NewsSectionProps = {
  title: string
  count: number
}

export function NewsSection({ title, count }: NewsSectionProps) {
  const { isLoading, isError, posts } = useMediumPosts(count)
  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false)
  const [emblaRef, embla] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  })

  const scrollPrev = React.useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = React.useCallback(() => embla && embla.scrollNext(), [embla])

  const onSelect = React.useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  React.useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on('select', onSelect)
  }, [embla, onSelect])

  return (
    <Box as="section" px={2} style={{ overflow: 'hidden' }}>
      <Container>
        <Shelf alignItems="center" flexWrap="wrap" gap={4} rowGap={[4, 4, 0]}>
          <Text as="h2" variant="heading2">
            {title}
          </Text>
          <InternalLink to="/news" variant="secondary" small>
            View all articles
          </InternalLink>

          {!isError && (
            <Shelf gap={2} ml="auto" width={['100%', '100%', 'auto']} justifyContent="end">
              <Control onClick={scrollPrev} disabled={!prevBtnEnabled} title="Previous" flipped>
                <Arrow />
              </Control>
              <Control onClick={scrollNext} disabled={!nextBtnEnabled} title="Next">
                <Arrow />
              </Control>
            </Shelf>
          )}
        </Shelf>

        {!isError ? (
          <Box ref={emblaRef} style={{ overflow: 'visible' }} mt={[1, 1, 6]} py={1}>
            <Shelf as="ul" p={0} m={0} role="list" gap={2} alignItems="normal">
              {posts.map(({ guid, title, link, thumbnail, description, pubDate }, index) => (
                <Box as="li" key={`${guid}${index}`} width={[300, 400, 480]} flexShrink={0}>
                  <NewsCard
                    label={toLocaleDate(pubDate)}
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
              Unable to display latest articles
            </Text>
            <Text>Please refresh the page or try again later.</Text>
          </NoteCard>
        )}
      </Container>
    </Box>
  )
}
