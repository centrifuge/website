import { GlobalStyle as FabricGlobalStyle } from '@centrifuge/fabric'
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { Box } from '@centrifuge/fabric'
import type { ButtonVariant } from './desktop-menu/SubMenu'
import { theme } from '../theme'
import { Footer } from './footer'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './header'

type LayoutProps = {
  menuButtonVariant: ButtonVariant
  children: React.ReactNode
}

export function Layout({ menuButtonVariant, children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <FabricGlobalStyle />
      <GlobalStyle />
      <Header menuButtonVariant={menuButtonVariant} />
      <Box as="main" pt={theme.sizes.headerHeight} flexGrow={2}>
        {children}
      </Box>
      <Footer />
    </ThemeProvider>
  )
}
