import * as React from 'react'
import { Box, BoxProps } from '@centrifuge/fabric'
import styled from 'styled-components'
import { useVisibilityChecker } from '../hooks/use-visibility-checker'

export type RevealWrapperProps = {
  onEnter: () => void
  marginTop?: number
  marginBottom?: number
} & BoxProps

export function RevealWrapper({ onEnter, marginTop = 0, marginBottom = 0, children, ...rest }: RevealWrapperProps) {
  const ref = React.useRef<HTMLElement>(null)

  useVisibilityChecker({
    ref,
    marginTop,
    marginBottom,
    onEnter,
  })

  return (
    <Box ref={ref} {...rest}>
      {children}
    </Box>
  )
}

export type RevealProps = {
  isRevealed: boolean
  staggerIndex?: number
  stagger?: number
  delay?: number
} & BoxProps

const duration = '0.5s'

const Root = styled(Box)<{ isRevealed: boolean; delay: number; stagger: number; staggerIndex: number }>`
  opacity: ${({ isRevealed }) => (isRevealed ? 1 : 0)};
  transform: ${({ isRevealed }) => (isRevealed ? 'translateY(0)' : 'translateY(30px)')};
  transition: opacity ${duration} linear, transform ${duration} ease-out;
  transition-delay: ${({ delay, stagger, staggerIndex }) => `${delay + stagger * staggerIndex}s`};
`

export function Reveal({
  isRevealed = false,
  staggerIndex = 0,
  stagger = 0.1,
  delay = 0.4,
  children,
  ...rest
}: RevealProps) {
  return (
    <Root isRevealed={isRevealed} delay={delay} stagger={stagger} staggerIndex={staggerIndex} {...rest}>
      {children}
    </Root>
  )
}
