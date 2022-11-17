import React from 'react'
import { graphql } from 'gatsby'
import { Text, Box, Container, Shelf, IconArrowLeft, IconArrowRight } from '@centrifuge/fabric'
import { useCarousel } from '../../hooks/use-carousel'
import { InternalLink } from '../InternalLink'
import { NewsCard } from '../news-card'
import { Control } from '../Control'

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
          <InternalLink to="/news" variant="secondary" small>
            View all articles
          </InternalLink>

          <Shelf gap={2} ml="auto" width={['100%', '100%', 'auto']} justifyContent="end">
            <Control onClick={scrollPrev} disabled={!prevBtnEnabled} title="Previous">
              <IconArrowLeft />
            </Control>
            <Control onClick={scrollNext} disabled={!nextBtnEnabled} title="Next">
              <IconArrowRight />
            </Control>
          </Shelf>
        </Shelf>

        <Box ref={viewportRef} style={{ overflow: 'visible' }} mt={[1, 1, 6]} py={1}>
          <Shelf as="ul" p={0} m={0} role="list" gap={2}>
            {new Array(count).fill('').map((_, index) => (
              <Box as="li" key={index} width={[300, 400, 480]} flexShrink={0}>
                <NewsCard
                  label="Kuma"
                  title="AIR/aUSD Listing and Liquidity Incentive Program Launching on Karura Swap"
                  body="48-hour bootstrap provisioning period expected live on July 13"
                  image="https://miro.medium.com/max/1400/0*RBrfPdKqaa_Xm-JF"
                  href="https://medium.com/centrifuge/air-ausd-listing-and-liquidity-incentive-program-launching-on-karura-swap-3bdd0fa6493b"
                  boxed
                  isLoading
                />
              </Box>
            ))}
          </Shelf>
        </Box>
      </Container>
    </Box>
  )
}
