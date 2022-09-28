import * as React from 'react'
import type { SectionType } from './Sections'

type TestimonialProps = {
  body: string
  cite: string
  image: string
}

export type TestimonialsProps = {
  type: SectionType
  title: string
  items: TestimonialProps[]
}

export function Testimonials({ title, items }: TestimonialsProps) {
  return (
    <section>
      <h2>{title}</h2>
      {items.map(({ body, cite, image }, index) => (
        <figure key={`${cite}-${index}`}>
          <blockquote>
            <p>{body}</p>
          </blockquote>
          <figcaption>
            <cite>- {cite}</cite>
          </figcaption>
        </figure>
      ))}
    </section>
  )
}
