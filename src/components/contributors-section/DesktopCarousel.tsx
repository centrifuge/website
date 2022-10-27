import React from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { Shelf, Box } from '@centrifuge/fabric'
import { Contributor, ContributorProps } from './Contributor'
import { Viewport } from './styles'

type DesktopCarouselProps = {
  items: ContributorProps[]
  align: EmblaOptionsType['align']
}

export function DesktopCarousel({ items, align = 'center' }: DesktopCarouselProps) {
  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align,
  })

  React.useEffect(() => {
    if (!embla) {
      return
    }

    return () => embla && embla.destroy()
  }, [embla])

  return (
    <Box display={['none', 'block']}>
      <Viewport ref={viewportRef} overflow="hidden">
        <Shelf as="ul">
          {items.map((item) => (
            <Contributor item={item} key={item.name} />
          ))}
        </Shelf>
      </Viewport>
    </Box>
  )
}
