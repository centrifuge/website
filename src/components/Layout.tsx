import { Box } from '@centrifuge/fabric'
import * as React from 'react'
import { Base } from './Base'
import type { ButtonVariant } from './desktop-menu/SubMenu'
import { theme } from '../theme'
import { Footer } from './footer'
import { Header } from './header'
import { GDPRBanner } from './GDPRBanner'

type LayoutProps = {
  menuButtonVariant?: ButtonVariant
  children: React.ReactNode
  padded?: boolean
}

export function Layout({ menuButtonVariant = 'primary', children, padded = true }: LayoutProps) {
  return (
    <Base>
      <Header menuButtonVariant={menuButtonVariant} />
      <Box
        as="main"
        pt={theme.sizes.headerHeight}
        pb={padded ? ['layoutSmall', 'layoutMedium', 'layoutLarge'] : 0}
        flexGrow={2}
      >
        {children}
      </Box>
      <GDPRBanner />
      <Footer />
    </Base>
  )
}
