import React from 'react'
import { Shelf, Box, Stack, IconArrowLeft, IconArrowRight } from '@centrifuge/fabric'
import { useCarousel } from '../../hooks/use-carousel'
import { Contributor, ContributorProps } from './Contributor'
import { Viewport } from './styles'
import { Control } from '../Control'

type MobileCarouselProps = {
  items: ContributorProps[]
}

const ITEMS_PER_CHUNK = 5

export function MobileCarousel({ items }: MobileCarouselProps) {
  const chunks = React.useMemo(
    () =>
      items.reduce((chunks: ContributorProps[][], item: ContributorProps, index) => {
        const chunk = Math.floor(index / ITEMS_PER_CHUNK)
        chunks[chunk] = ([] as ContributorProps[]).concat(chunks[chunk] || [], item)
        return chunks
      }, []),
    [items]
  )

  const { viewportRef, prevBtnEnabled, nextBtnEnabled, scrollPrev, scrollNext } = useCarousel({
    skipSnaps: false,
  })

  return (
    <Box display={['block', 'none']}>
      <Shelf justifyContent="end" px={2} gap={1}>
        <Control type="button" title="Previous" onClick={scrollPrev} disabled={!prevBtnEnabled}>
          <IconArrowLeft />
        </Control>
        <Control type="button" title="Next" onClick={scrollNext} disabled={!nextBtnEnabled}>
          <IconArrowRight />
        </Control>
      </Shelf>

      <Viewport ref={viewportRef} overflow="hidden" mt={2}>
        <Shelf alignItems="start">
          {chunks.map((chunk) => (
            <Stack key={chunk[0].name} as="ul" gap={4} flexShrink={0} flexBasis="100%" flexGrow={0} px={2}>
              {chunk.map((item) => (
                <Contributor item={item} key={item.name} />
              ))}
            </Stack>
          ))}
        </Shelf>
      </Viewport>
    </Box>
  )
}
