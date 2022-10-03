import * as React from 'react'
import type { SectionType } from './Sections'
import { links } from '../../config/links'

export type HeroMainProps = {
  type: SectionType
  title: string[]
  body: string[]
}

export function HeroMain({ title, body }: HeroMainProps) {
  return (
    <section>
      <h1>Real-World {title[0]}</h1>

      {body.map((entry, index) => (
        <p key={`${index}`}>{entry}</p>
      ))}

      <a href={links.app} rel="noopener noreferrer" target="_blank">
        Enter App
      </a>
    </section>
  )
}
