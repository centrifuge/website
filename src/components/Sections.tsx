import * as React from 'react'

import type { TestimonialsProps } from './Testimonials'
import type { HeroMainProps } from './hero-main'
import type { UspSectionProps } from './usp-section'

import { Testimonials } from './Testimonials'
import { HeroMain } from './hero-main'
import { UspSection } from './usp-section'

const types = {
  testimonials: Testimonials,
  hero_main: HeroMain,
  usp_section: UspSection,
}

export type SectionType = keyof typeof types
export type SectionProps = TestimonialsProps | HeroMainProps | UspSectionProps

type SectionsProps = {
  sections: SectionProps[]
}

export function Sections({ sections }: SectionsProps) {
  return (
    <>
      {sections.map((section, index) => {
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
