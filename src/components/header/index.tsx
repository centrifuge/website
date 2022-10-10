import * as React from 'react'
import { Container, Shelf } from '@centrifuge/fabric'
import type { ButtonVariant } from '../desktop-menu/SubMenu'
import { Logo } from '../Logo'
import { MobileMenu } from '../mobile-menu'
import { DesktopMenu } from '../desktop-menu'
import { Root, LogoLink } from './styles'
import { useTheme } from 'styled-components'

type HeaderProps = {
  menuButtonVariant: ButtonVariant
}

export function Header({ menuButtonVariant }: HeaderProps) {
  const { sizes, zIndices } = useTheme()

  return (
    <Root as="header" position="fixed" zIndex={zIndices.sticky} top={0} px={2} height={sizes.headerHeight}>
      <Container as={Shelf} justifyContent="space-between" alignItems="center" height="100%" maxWidth="containerHeader">
        <LogoLink to="/" title="Home page">
          <Logo />
        </LogoLink>

        <MobileMenu />
        <DesktopMenu menuButtonVariant={menuButtonVariant} />
      </Container>
    </Root>
  )
}
