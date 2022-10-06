import * as React from 'react'
import { Link } from 'gatsby'
import { Text } from '@centrifuge/fabric'

export type AnchorProps = {
  label: string
  href: string
  isExternal?: boolean
}

export function Anchor({ label, href, isExternal }: AnchorProps) {
  return isExternal ? (
    <Text variant="menuAnchor" as="a" href={href} rel="noopener noreferrer" target="_blank">
      {label}
    </Text>
  ) : (
    <Text variant="menuAnchor" as={Link} to={href}>
      {label}
    </Text>
  )
}
