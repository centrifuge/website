import * as React from 'react'
import { Link } from 'gatsby'
import { Text } from '@centrifuge/fabric'

export type AnchorProps = {
  label: string
  href: string
  isExternal?: boolean
}

const textProps = {
  variant: 'body2',
  color: 'textInverted',
}

export function Anchor({ label, href, isExternal }: AnchorProps) {
  return isExternal ? (
    <Text as="a" href={href} rel="noopener noreferrer" target="_blank" {...textProps}>
      {label}
    </Text>
  ) : (
    <Text as={Link} to={href} {...textProps}>
      {label}
    </Text>
  )
}
