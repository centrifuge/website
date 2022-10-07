import * as React from 'react'
import { Container, Shelf } from '@centrifuge/fabric'
import { Logo } from '../Logo'
import { MobileMenu } from '../MobileMenu'
import { DesktopMenu } from '../DesktopMenu'
import { Root, LogoLink } from './styles'

export function Header() {
  return (
    <Root as="header" px={2} height={[50, 65, 65]}>
      <Container as={Shelf} alignItems="center" height="100%" maxWidth="containerHeader">
        <LogoLink to="/" title="Home page">
          <Logo />
        </LogoLink>

        {/* <MobileMenu /> */}
        {/* <DesktopMenu /> */}
      </Container>
    </Root>
  )
}
