import * as React from 'react'
import type { AnchorProps } from './Anchor'
import { Anchor } from './Anchor'
import { Wrapper, Link, Toggle, ToogleIcon, Collapsable } from './styles'

export type SubMenuProps = {
  label: string
  href?: string
  items?: AnchorProps[]
  preventTab: boolean
}

export function SubMenu({ label, href, items, preventTab }: SubMenuProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Wrapper px={2} py={1} open={open}>
      {href ? (
        <Link as="a" href={href}>
          {label}
        </Link>
      ) : (
        <Toggle as="button" role="button" aria-expanded={open} onClick={() => setOpen(!open)}>
          {label}
          <ToogleIcon open={open} />
        </Toggle>
      )}

      {!!items && (
        <Collapsable role="list" aria-hidden={!open} open={open && !preventTab}>
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`}>
              <Anchor {...item} />
            </li>
          ))}
        </Collapsable>
      )}
    </Wrapper>
  )
}
