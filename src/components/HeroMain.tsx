import * as React from 'react'
import type { SectionType } from './Sections'

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

      <a href="https://tinlake.centrifuge.io/" rel="noopener noreferrer" target="_blank">
        Enter App
      </a>
    </section>
  )
}
