import * as React from 'react'
import type { AnchorProps } from './Anchor'
import { Anchor } from './Anchor'
import { Wrapper, Toggle, ToogleIcon, Collapsable } from './styles'

export type SubMenuProps = {
  label: string
  items: AnchorProps[]
  preventTab: boolean
}

export function SubMenu({ label, items, preventTab }: SubMenuProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Wrapper px={2} py={1} open={open}>
      <Toggle as="button" role="button" aria-expanded={open} onClick={() => setOpen(!open)}>
        {label}
        <ToogleIcon open={open} />
      </Toggle>
      <Collapsable role="list" aria-hidden={!open} open={open && !preventTab}>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            <Anchor {...item} />
          </li>
        ))}
      </Collapsable>
    </Wrapper>
  )
}
