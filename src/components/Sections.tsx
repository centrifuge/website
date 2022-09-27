import * as React from 'react'

import type { TestimonialsProps } from './Testimonials'
import { Testimonials } from './Testimonials'

const types = {
  testimonials: Testimonials,
}

type SectionProps = {
  sections: TestimonialsProps[]
}

export function Sections({ sections }: SectionProps) {
  return sections.map((section, index) => {
    const Comp = types[section.type]

    return <Comp key={`${section.type}-${index}`} {...section} />
  })
}
