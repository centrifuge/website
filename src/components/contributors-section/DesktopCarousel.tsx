import React from 'react'
import { EmblaOptionsType } from 'embla-carousel-react'
import { Container, Shelf, Box, IconArrowLeft, IconArrowRight } from '@centrifuge/fabric'
import { useCarousel } from '../../hooks/use-carousel'
import { Control } from '../Control'
import { Contributor, ContributorProps } from './Contributor'
import { Viewport } from './styles'

type DesktopCarouselProps = {
  items: ContributorProps[]
  align: EmblaOptionsType['align']
  flipped?: boolean
}

export function DesktopCarousel({ items, align = 'center', flipped }: DesktopCarouselProps) {
  const { viewportRef, prevBtnEnabled, nextBtnEnabled, scrollPrev, scrollNext } = useCarousel({
    loop: true,
    dragFree: true,
    align,
  })

  return (
    <Box display={['none', 'block']}>
      {!flipped && (
        <Controls
          scrollPrev={scrollPrev}
          scrollNext={scrollNext}
          prevBtnEnabled={prevBtnEnabled}
          nextBtnEnabled={nextBtnEnabled}
        />
      )}

      <Viewport ref={viewportRef} overflow="hidden">
        <Shelf as="ul" alignItems="start">
          {items.map((item) => (
            <Contributor item={item} key={item.name} />
          ))}
        </Shelf>
      </Viewport>

      {flipped && (
        <Controls
          scrollPrev={scrollPrev}
          scrollNext={scrollNext}
          prevBtnEnabled={prevBtnEnabled}
          nextBtnEnabled={nextBtnEnabled}
          flipped={flipped}
        />
      )}
    </Box>
  )
}

type ControlsProps = {
  scrollPrev: () => void
  scrollNext: () => void
  prevBtnEnabled: boolean
  nextBtnEnabled: boolean
  flipped?: boolean
}

function Controls({ scrollPrev, scrollNext, prevBtnEnabled, nextBtnEnabled, flipped }: ControlsProps) {
  return (
    <Box px={2} mt={flipped ? 2 : 0} mb={flipped ? 0 : 2}>
      <Shelf as={Container} justifyContent={flipped ? 'start' : 'end'} gap={2}>
        <Control type="button" title="Previous" onClick={scrollPrev} disabled={!prevBtnEnabled}>
          <IconArrowLeft />
        </Control>
        <Control type="button" title="Next" onClick={scrollNext} disabled={!nextBtnEnabled}>
          <IconArrowRight />
        </Control>
      </Shelf>
    </Box>
  )
}
