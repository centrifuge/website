import * as React from 'react'
import { graphql } from 'gatsby'
import { Text } from '@centrifuge/fabric'
import { Image } from './Image'

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
    }
  }
`

type TestimonialProps = {
  body: string
  cite: string
  image: string
}

export type TestimonialsProps = {
  title: string
  items: TestimonialProps[]
}

export function Testimonials({ title, items }: TestimonialsProps) {
  return (
    <section>
      <h2>{title}</h2>
      {items.map(({ body, cite, image }, index) => (
        <figure key={`${cite}-${index}`}>
          <Image data={image} />
          <blockquote>
            <Text variant="body1" as="p">
              {body}
            </Text>
          </blockquote>
          <figcaption>
            <cite>- {cite}</cite>
          </figcaption>
        </figure>
      ))}
    </section>
  )
}
