import * as React from 'react'
import { SVG } from './styles'
import { Twitter } from './Twitter'
import { Discord } from './Discord'
import { Youtube } from './Youtube'
import { Linkedin } from './Linkedin'
import { Telegram } from './Telegram'
import { Forum } from './Forum'
import { Medium } from './Medium'

export type SocialIconProps = {
  type: keyof typeof types
  size?: string | number
}

const types = {
  twitter: Twitter,
  discord: Discord,
  youtube: Youtube,
  linkedin: Linkedin,
  telegram: Telegram,
  forum: Forum,
  medium: Medium,
}

export function SocialIcon({ type, size = 'auto' }: SocialIconProps) {
  if (!types[type]) {
    console.log('No SocialIcon of type: ', type)
    return null
  }

  const Comp = types[type]
  return (
    <SVG size={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <Comp />
    </SVG>
  )
}
