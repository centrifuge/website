import React from 'react'
import { Box, Container, Shelf, Text } from '@centrifuge/fabric'
import { useTheme } from 'styled-components'
import type { ButtonVariant } from '../desktop-menu/SubMenu'
import { useScrollDirection } from '../../hooks/use-scroll-direction'
import { Logo } from '../Logo'
import { MobileMenu } from '../mobile-menu'
import { DesktopMenu } from '../desktop-menu'
import { Root, LogoLink } from './styles'
import { Banner } from '../Banner'
import { links } from '../../../config/links'

type HeaderProps = {
  menuButtonVariant: ButtonVariant
}

export function Header({ menuButtonVariant }: HeaderProps) {
  const { sizes, zIndices } = useTheme()
  const scrollDirection = useScrollDirection(50)

  return (
    <>
      <Banner>
        Centrifuge is Everywhere. Read the{' '}
        <Text
          as="a"
          style={{ textDecoration: 'underline' }}
          href={links.announcements}
          rel="noopener noreferrer"
          target="_blank"
          variant="body2"
        >
          Announcement
        </Text>
      </Banner>
      <Root
        as="header"
        position="sticky"
        zIndex={zIndices.sticky}
        top={0}
        px={0}
        height={sizes.headerHeight}
        isHidden={scrollDirection === 'down'}
      >
        <Box alignItems="center" justifyContent="center" height="100%">
          <Container
            px={2}
            py={1}
            as={Shelf}
            justifyContent="space-between"
            alignItems="center"
            height="100%"
            maxWidth="containerHeader"
          >
            <LogoLink to="/" title="Home page">
              <Logo />
            </LogoLink>

            <MobileMenu />
            <DesktopMenu menuButtonVariant={menuButtonVariant} />
          </Container>
        </Box>
      </Root>
    </>
  )
}
