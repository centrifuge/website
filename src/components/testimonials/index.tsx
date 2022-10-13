import * as React from 'react'
import { graphql } from 'gatsby'
import { Shelf, Box, Container, Text } from '@centrifuge/fabric'
import useEmblaCarousel from 'embla-carousel-react'
import { Testimonial } from './Testimonial'
import type { TestimonialProps } from './Testimonial'
import { Slide, Dot } from './styles'

export const query = graphql`
  fragment TestimonialsFragment on DataJsonTestimonials {
    title
    items {
      body
      cite
      image {
        publicURL
        extension
      }
      image_max_width
    }
  }
`

export type TestimonialsProps = {
  title: string
  items: TestimonialProps[]
}

export function Testimonials({ title, items }: TestimonialsProps) {
  const [selectedIndex, setSelectedIndex] = React.useState(0)
  const [emblaRef, embla] = useEmblaCarousel({
    axis: 'x',
    draggable: false,
  })
  const scrollTo = React.useCallback((index: number) => embla && embla.scrollTo(index), [embla])

  const onSelect = React.useCallback(() => {
    if (!embla) {
      return
    }

    setSelectedIndex(embla.selectedScrollSnap())
  }, [embla, setSelectedIndex])

  React.useEffect(() => {
    if (!embla) {
      return
    }

    onSelect()
    embla.on('select', onSelect)

    return () => embla && embla.destroy()
  }, [embla, onSelect])

  return (
    <Box as="section" px={2}>
      <Container>
        <Text as="h2" variant="heading2">
          {title}
        </Text>

        <Container maxWidth="containerNarrow" pt={100}>
          <Box ref={emblaRef} style={{ overflow: 'hidden' }}>
            <Shelf as="ul" p={0} m={0} role="list" style={{ listStyle: 'none' }}>
              {items.map((item, index) => (
                <Slide
                  key={`${item.cite}-${index}`}
                  offsetX={index}
                  offsetY={index - selectedIndex}
                  selected={index === selectedIndex}
                >
                  <Testimonial {...item} />
                </Slide>
              ))}
            </Shelf>
          </Box>
          {items.map(({ cite }, index) => (
            <Dot
              key={`${cite}${index}`}
              role="button"
              title={`Go to testimonial by "${cite}"`}
              onClick={() => scrollTo(index)}
              selected={index === selectedIndex}
            />
          ))}
        </Container>
      </Container>
    </Box>
  )
}
