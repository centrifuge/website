import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'

export function useCarousel(options: EmblaOptionsType) {
  const [viewportRef, embla] = useEmblaCarousel(options)

  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [prevBtnEnabled, setPrevBtnEnabled] = React.useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = React.useState(false)

  const scrollPrev = React.useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = React.useCallback(() => embla && embla.scrollNext(), [embla])

  const scrollTo = React.useCallback((index: number) => embla && embla.scrollTo(index), [embla])

  const onSelect = React.useCallback(() => {
    if (!embla) {
      return
    }

    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
    setSelectedIndex(embla.selectedScrollSnap())
  }, [embla, setSelectedIndex])

  React.useEffect(() => {
    if (!embla) {
      return
    }

    onSelect()
    embla.on('select', onSelect)

    return () => embla && embla.destroy()
  }, [embla])

  return { viewportRef, prevBtnEnabled, nextBtnEnabled, scrollPrev, scrollNext, selectedIndex, scrollTo }
}
