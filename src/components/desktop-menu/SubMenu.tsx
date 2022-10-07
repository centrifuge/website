import * as React from 'react'
import { Link } from 'gatsby'
import { AnchorButton, Text, Box } from '@centrifuge/fabric'
import type { AnchorProps } from './Anchor'
import { Anchor } from './Anchor'
import { Dropdown } from './styles'

export type ButtonVariant = 'primary' | 'secondary'

type SubMenuProps = {
  label: string
  items?: AnchorProps[]
  href?: string
  isExternal?: boolean
  isButton?: boolean
  buttonVariant: ButtonVariant
}

export function SubMenu({ label, items, href, isExternal, isButton, buttonVariant = 'primary' }: SubMenuProps) {
  return (
    <>
      {href ? (
        isExternal ? (
          isButton ? (
            <AnchorButton href={href} rel="noopener noreferrer" target="_blank" small variant={buttonVariant}>
              {label}
            </AnchorButton>
          ) : (
            <Text as="a" href={href} rel="noopener noreferrer" target="_blank">
              {label}
            </Text>
          )
        ) : (
          <Text as={Link} to={href}>
            {label}
          </Text>
        )
      ) : (
        <Text as="button" variant="body2" role="button">
          {label}
        </Text>
      )}

      {!!items && (
        <Dropdown as="ul" px={2} py={1} role="list">
          {items.map((item, index) => (
            <Box as="li" key={`${item.label}-${index}`} mt={index > 0 ? 1 : 0}>
              <Anchor {...item} />
            </Box>
          ))}
        </Dropdown>
      )}
    </>
  )
}
