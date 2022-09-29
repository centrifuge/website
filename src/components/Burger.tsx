import * as React from 'react'

type BurgerProps = {
  open: boolean
  toggle: () => void
}

export function Burger({ open, toggle }: BurgerProps) {
  return (
    <button role="button" title={open ? 'Hide menu' : 'Show menu'} onClick={toggle} aria-expanded={open}>
      {open ? 'x' : '='}
    </button>
  )
}
