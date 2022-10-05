import * as React from 'react'
import centrifugeLight from '@centrifuge/fabric/dist/theme/centrifugeLight'
import { GlobalStyle as FabricGlobalStyle } from '@centrifuge/fabric'
import { GlobalStyle } from './GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { Header } from './header'
import { Footer } from './footer'

type LayoutProps = {
  children: React.ReactNode
}

console.log('centrifugeLight', centrifugeLight)

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={centrifugeLight}>
      <FabricGlobalStyle />
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
