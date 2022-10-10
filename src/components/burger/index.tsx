import * as React from 'react'
import { Button } from './styles'

type BurgerProps = {
  open: boolean
  toggle: () => void
}

export function Burger({ open, toggle }: BurgerProps) {
  return (
    <Button role="button" title={open ? 'Hide menu' : 'Show menu'} onClick={toggle} aria-expanded={open} open={open}>
      <span />
      <span />
      <span />
    </Button>
  )
}
