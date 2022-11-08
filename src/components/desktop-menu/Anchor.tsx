import * as React from 'react'
import { Text } from '@centrifuge/fabric'
import { Link } from 'gatsby'

export type AnchorProps = {
  label: string
  href: string
  isExternal?: boolean
  onKeyUp?: (e: KeyboardEvent) => void
}

export function Anchor({ label, href, isExternal, onKeyUp }: AnchorProps) {
  return isExternal ? (
    <Text as="a" href={href} rel="noopener noreferrer" target="_blank" variant="menuAnchor" onKeyUp={onKeyUp}>
      {label}
    </Text>
  ) : (
    <Text as={Link} to={href} variant="menuAnchor" onKeyUp={onKeyUp}>
      {label}
    </Text>
  )
}
