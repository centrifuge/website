import * as React from 'react'
import { Link } from 'gatsby'
import { footer } from '../../config/footer'

export function Footer() {
  return (
    <footer>
      <nav>
        {footer.map((column, index) => (
          <Column key={`${index}`} {...column} />
        ))}
      </nav>
    </footer>
  )
}

type ColumnProps = {
  title: string
  items: AnchorProps[]
}

function Column({ title, items }: ColumnProps) {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            <Anchor {...item} />
          </li>
        ))}
      </ul>
    </div>
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
