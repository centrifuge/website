import * as React from 'react'
import styled, { keyframes } from 'styled-components'

export type TypewriterProps = {
  phrases: string[] // Needs to be memoized
  paused?: boolean
}

const blink = keyframes`
	to {
		visibility: hidden;
	}
`

const Blink = styled.span`
  animation: ${blink} 1s steps(2, start) infinite;
`

export function Typewriter({ phrases, paused }: TypewriterProps) {
  const [txtIndex, setTxtIndex] = React.useState(phrases[0].length)
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [phraseIndex, setPhraseIndex] = React.useState(0)

  const phrase = phrases[phraseIndex]
  const txt = phrase.slice(0, txtIndex)

  React.useEffect(() => {
    if (paused) return

    let deleting = isDeleting

    let delta = 200 - Math.random() * 100

    if (isDeleting) {
      delta /= 2
    }

    if (!isDeleting && txtIndex === phrases[phraseIndex].length) {
      delta = 2000
      deleting = true
      setIsDeleting(deleting)
    } else if (isDeleting && txtIndex === 0) {
      deleting = false
      setIsDeleting(deleting)
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
      delta = 500
    }

    const index = deleting ? txtIndex - 1 : txtIndex + 1

    const tid = setTimeout(() => {
      setTxtIndex(index)
    }, delta)

    return () => {
      clearTimeout(tid)
    }
  }, [txtIndex, paused])

  React.useEffect(() => {
    setIsDeleting(false)
    setPhraseIndex(0)
    setTxtIndex(phrases[0].length)
  }, [phrases])

  return (
    <>
      {txt}
      <Blink>_</Blink>
    </>
  )
}
