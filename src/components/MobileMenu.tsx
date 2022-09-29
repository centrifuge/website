import * as React from 'react'
import { Link } from 'gatsby'
import { Burger } from './Burger'
import { mobileMenu } from '../../config/menu'

export function MobileMenu() {
  const [open, setOpen] = React.useState(false)

  return (
    <nav role="navigation" aria-label="Main">
      <Burger open={open} toggle={() => setOpen(!open)} />

      <ul role="list" aria-hidden={!open}>
        {mobileMenu.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            <SubMenu {...item} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

type SubMenuProps = {
  label: string
  items: AnchorProps[]
}

function SubMenu({ label, items }: SubMenuProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <button role="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        {label}
        {open ? '-' : '+'}
      </button>
      <ul role="list" aria-hidden={!open}>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            <Anchor {...item} />
          </li>
        ))}
      </ul>
    </>
  )
}

type AnchorProps = {
  label: string
  href: string
  isExternal?: boolean
}

function Anchor({ label, href, isExternal }: AnchorProps) {
  return isExternal ? (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {label}
    </a>
  ) : (
    <Link to={href}>{label}</Link>
  )
}
