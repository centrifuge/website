import * as React from 'react'
import { Link } from 'gatsby'
import { MobileMenu } from './MobileMenu'
import { DesktopMenu } from './DesktopMenu'

export function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <MobileMenu />
      <DesktopMenu />
    </header>
  )
}
