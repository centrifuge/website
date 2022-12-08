import { GlobalStyle as FabricGlobalStyle } from '@centrifuge/fabric'
import * as React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from '../theme'
import { GlobalStyle } from './GlobalStyle'

type BaseProps = {
  children: React.ReactNode
}

export function Base({ children }: BaseProps) {
  return (
    <ThemeProvider theme={theme}>
      <FabricGlobalStyle />
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
