import * as React from 'react'
import { Shelf, Text } from '@centrifuge/fabric'
import { SocialIcon, SocialIconProps } from '../social-icon'

type SocialsProps = {
  items: SocialProp[]
}

export type SocialProp = {
  label: string
  href: string
  icon: SocialIconProps['type']
}

export function Socials({ items }: SocialsProps) {
  return (
    <Shelf as="ul" role="list" gap={2} gridColumn={[1, 2, 3, 4, 5]}>
      {items.map(({ label, href, icon }) => (
        <li key={label}>
          <Text
            as="a"
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            title={label}
            variant="body2"
            color="textInverted"
          >
            <SocialIcon type={icon} size="1.4em" />
          </Text>
        </li>
      ))}
    </Shelf>
  )
}
