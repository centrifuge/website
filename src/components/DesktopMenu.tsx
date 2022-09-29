import * as React from 'react'
import { Link } from 'gatsby'
import { desktopMenu } from '../../config/menu'

export function DesktopMenu() {
  return (
    <nav role="navigation" aria-label="Main">
      <ul role="list">
        {desktopMenu.map((item, index) => (
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
  items?: AnchorProps[]
  href?: string
  isExternal?: boolean
  isButton?: boolean
}

function SubMenu({ label, items, href, isExternal, isButton }: SubMenuProps) {
  return (
    <>
      {href ? (
        isExternal ? (
          <a href={href} rel="noopener noreferrer" target="_blank">
            {label}
          </a>
        ) : (
          <Link to={href}>{label}</Link>
        )
      ) : (
        <button role="button">{label}</button>
      )}

      {!!items && (
        <ul role="list" aria-hidden={!open}>
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`}>
              <Anchor {...item} />
            </li>
          ))}
        </ul>
      )}
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
