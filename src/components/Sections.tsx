import * as React from 'react'

import type { TestimonialsProps } from './Testimonials'
import type { HeroMainProps } from './hero-main'

import { Testimonials } from './Testimonials'
import { HeroMain } from './hero-main'

const types = {
  testimonials: Testimonials,
  hero_main: HeroMain,
}

export type SectionType = keyof typeof types
export type SectionProps = TestimonialsProps | HeroMainProps

type SectionsProps = {
  sections: SectionProps[]
}

export function Sections({ sections }: SectionsProps) {
  return (
    <>
      {sections.map((section, index) => {
        // const key = type as keyof typeof types
        const { type } = section

        if (types[type]) {
          const Comp = types[type]
          return <Comp key={`${type}-${index}`} {...section} />
        } else {
          console.warn('No section of type: ', type)
        }
      })}
    </>
  )
}
