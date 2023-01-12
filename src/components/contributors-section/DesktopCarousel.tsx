import React from 'react'
import { Container, Shelf, Box, Grid, IconArrowLeft, IconArrowRight } from '@centrifuge/fabric'
import { useCarousel } from '../../hooks/use-carousel'
import { Reveal } from '../Reveal'
import { Control } from '../Control'
import { Contributor, ContributorProps } from './Contributor'
import { Viewport } from './styles'

type DesktopCarouselProps = {
  items: ContributorProps[]
}

const desktopMaxWidth = 2500

export function DesktopCarousel({ items }: DesktopCarouselProps) {
  const { viewportRef, prevBtnEnabled, nextBtnEnabled, scrollPrev, scrollNext } = useCarousel({
    dragFree: true,
    startIndex: Math.floor(items.length * 0.25),
  })

  const columnCount = Math.ceil(items.length * 0.5)

  return (
    <Reveal display={['none', 'block']} staggerIndex={1}>
      <Controls
        scrollPrev={scrollPrev}
        scrollNext={scrollNext}
        prevBtnEnabled={prevBtnEnabled}
        nextBtnEnabled={nextBtnEnabled}
      />

      <Viewport
        ref={viewportRef}
        overflow="hidden"
        mt={3}
        threshold={columnCount + 1}
        desktopMaxWidth={desktopMaxWidth}
        maxWidth={desktopMaxWidth}
      >
        <Grid
          as="ul"
          alignItems="start"
          gridTemplateColumns={['1fr', `repeat(${columnCount}, 200px)`, `repeat(${columnCount}, 260px)`]}
          rowGap={4}
        >
          {items.map((item) => (
            <Contributor item={item} key={item.name} />
          ))}
        </Grid>
      </Viewport>
    </Reveal>
  )
}

type ControlsProps = {
  scrollPrev: () => void
  scrollNext: () => void
  prevBtnEnabled: boolean
  nextBtnEnabled: boolean
}

function Controls({ scrollPrev, scrollNext, prevBtnEnabled, nextBtnEnabled }: ControlsProps) {
  return (
    <Box px={2} ml="auto">
      <Shelf as={Container} gap={2} justifyContent="end">
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
