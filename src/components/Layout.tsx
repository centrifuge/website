import { Box, GlobalStyle as FabricGlobalStyle } from '@centrifuge/fabric'
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'
import { Footer } from './footer'
import { GlobalStyle } from './GlobalStyle'
import { Header } from './header'

type LayoutProps = {
  children: React.ReactNode
}
export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <FabricGlobalStyle />
      <GlobalStyle />
      <Header />
      <Box as="main" pb={200} px={3}>
        {children}
      </Box>
      <Footer />
    </ThemeProvider>
  )
}
