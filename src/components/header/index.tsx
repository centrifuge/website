import React from 'react'
import { Container, Shelf } from '@centrifuge/fabric'
import { useTheme } from 'styled-components'
import type { ButtonVariant } from '../desktop-menu/SubMenu'
import { useScrollDirection } from '../../hooks/use-scroll-direction'
import { Logo } from '../Logo'
import { MobileMenu } from '../mobile-menu'
import { DesktopMenu } from '../desktop-menu'
import { Root, LogoLink } from './styles'

type HeaderProps = {
  menuButtonVariant: ButtonVariant
}

export function Header({ menuButtonVariant }: HeaderProps) {
  const { sizes, zIndices } = useTheme()
  const scrollDirection = useScrollDirection(50)

  return (
    <Root
      as="header"
      position="fixed"
      zIndex={zIndices.sticky}
      top={0}
      px={2}
      height={sizes.headerHeight}
      isHidden={scrollDirection === 'down'}
    >
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
