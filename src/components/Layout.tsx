import * as React from 'react'
import centrifugeLight from '@centrifuge/fabric/dist/theme/centrifugeLight'
import { GlobalStyle } from '@centrifuge/fabric'
import { FontStyle } from './RootStyle'
import { ThemeProvider } from 'styled-components'
import { Header } from './Header'
import { Footer } from './Footer'

type LayoutProps = {
  children: React.ReactNode
}

console.log('centrifugeLight', centrifugeLight)

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider theme={centrifugeLight}>
      <GlobalStyle />
      <FontStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}
