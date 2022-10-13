import { Box, GlobalStyle as FabricGlobalStyle } from '@centrifuge/fabric'
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import type { ButtonVariant } from './desktop-menu/SubMenu'
import { theme } from '../theme'
import { Footer } from './footer'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './header'

type LayoutProps = {
  menuButtonVariant?: ButtonVariant
  children: React.ReactNode
}

export function Layout({ menuButtonVariant = 'primary', children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <FabricGlobalStyle />
      <GlobalStyle />
      <Header menuButtonVariant={menuButtonVariant} />
      <Box as="main" pt={theme.sizes.headerHeight} pb={200} flexGrow={2}>
        {children}
      </Box>
      <Footer />
    </ThemeProvider>
  )
}
