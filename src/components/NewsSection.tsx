import React from 'react'
import { graphql } from 'gatsby'
import { Text, Box, Container, Shelf, IconArrowLeft, IconArrowRight, AnchorButton } from '@centrifuge/fabric'
import { useCarousel } from '../hooks/use-carousel'
import { Reveal, RevealWrapper } from './Reveal'
import { InternalLink } from './InternalLink'
import { NewsCard, PostProps } from './news-card'
import { Control } from './Control'

export const query = graphql`
  fragment NewsSectionFragment on DataJsonNews_section {
    title
    link {
      label
      href
    }
  }
`

export type NewsSectionProps = {
  title: string
  link: { label: string; href: string; isExternal: boolean }
  posts: PostProps[]
}

export function NewsSection({ title, link, posts }: NewsSectionProps) {
  const { viewportRef, prevBtnEnabled, nextBtnEnabled, scrollPrev, scrollNext } = useCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  })

  return (
    <RevealWrapper as="section" px={2} style={{ overflow: 'hidden' }}>
      <Container>
        <Reveal>
          <Shelf alignItems="center" flexWrap="wrap" gap={4} rowGap={[4, 4, 0]}>
            <Text as="h2" variant="heading2b">
              {title}
            </Text>

            {link.isExternal ? (
              <AnchorButton href={link.href} variant="secondary" small rel="noopener noreferrer" target="_blank">
                {link.label}
              </AnchorButton>
            ) : (
              <InternalLink to={link.href} variant="secondary" small>
                {link.label}
              </InternalLink>
            )}

            <Shelf gap={2} ml="auto" width={['100%', '100%', 'auto']} justifyContent="end">
              <Control onClick={scrollPrev} disabled={!prevBtnEnabled} title="Previous">
                <IconArrowLeft />
              </Control>
              <Control onClick={scrollNext} disabled={!nextBtnEnabled} title="Next">
                <IconArrowRight />
              </Control>
            </Shelf>
          </Shelf>
        </Reveal>

        <Reveal>
          <Box ref={viewportRef} style={{ overflow: 'visible' }} mt={[1, 1, 6]} py={1}>
            <Shelf as="ul" p={0} m={0} role="list" gap={2} alignItems="normal">
              {posts.map(({ id, date, outlet, title, href, image, alt, body }) => (
                <Box as="li" key={id} width={[300, 400, 480]} flexShrink={0}>
                  <NewsCard
                    date={date}
                    outlet={outlet}
                    title={title}
                    body={body}
                    image={image}
                    alt={alt}
                    href={href}
                    boxed
                  />
                </Box>
              ))}
            </Shelf>
          </Box>
        </Reveal>
      </Container>
    </RevealWrapper>
  )
}
