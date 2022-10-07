import * as React from 'react'
import { Container, Shelf } from '@centrifuge/fabric'
import { Logo } from '../Logo'
import { MobileMenu } from '../mobile-menu'
import { DesktopMenu } from '../DesktopMenu'
import { Root, LogoLink } from './styles'
import { useTheme } from 'styled-components'

export function Header() {
  const { sizes, zIndices } = useTheme()

  return (
    <Root as="header" position="fixed" zIndex={zIndices.sticky} top={0} px={2} height={sizes.headerHeight}>
      <Container as={Shelf} justifyContent="space-between" alignItems="center" height="100%" maxWidth="containerHeader">
        <LogoLink to="/" title="Home page">
          <Logo />
        </LogoLink>

        <MobileMenu />
        {/* <DesktopMenu /> */}
      </Container>
    </Root>
  )
}
