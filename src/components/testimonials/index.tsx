import * as React from 'react'
import { graphql } from 'gatsby'
import { Shelf, Box, Container, Text } from '@centrifuge/fabric'
import { useCarousel } from '../../hooks/use-carousel'
import { Testimonial } from './Testimonial'
import type { TestimonialProps } from './Testimonial'
import { Content, Slide, Dot } from './styles'

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
  const { viewportRef, selectedIndex, scrollTo } = useCarousel({
    axis: 'x',
    draggable: false,
  })

  return (
    <Box as="section" px={2}>
      <Container>
        <Text as="h2" variant="heading2">
          {title}
        </Text>

        <Content
          maxWidth="containerNarrow"
          pt={[100, 100, 150]}
          gridTemplateColumns={['1fr', '1fr 30px']}
          gap={4}
          mr="auto"
          ml="auto"
        >
          <Box ref={viewportRef} style={{ overflow: 'hidden' }}>
            <Shelf as="ul" p={0} m={0} role="list">
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

          <Shelf as="ul" role="list" flexDirection={['row', 'column']} justifyContent={['center', 'start']}>
            {items.map(({ cite }, index) => (
              <li key={`${cite}${index}`}>
                <Dot
                  role="button"
                  title={`Go to testimonial by "${cite}"`}
                  onClick={() => scrollTo(index)}
                  selected={index === selectedIndex}
                />
              </li>
            ))}
          </Shelf>
        </Content>
      </Container>
    </Box>
  )
}
