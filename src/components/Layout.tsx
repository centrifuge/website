import { GlobalStyle as FabricGlobalStyle } from '@centrifuge/fabric'
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { Box } from '@centrifuge/fabric'
import { theme } from '../theme'
import { Footer } from './footer'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './header'

type LayoutProps = {
  children: React.ReactNode
}
console.log('theme', theme)
export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <FabricGlobalStyle />
      <GlobalStyle />
      <Header />
      <Box as="main" pt={theme.sizes.headerHeight} flexGrow={2}>
        {children}
      </Box>
      <Footer />
    </ThemeProvider>
  )
}
