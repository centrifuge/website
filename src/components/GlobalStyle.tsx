import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-weight: 400 700;
    font-display: swap;
    font-style: normal;
    font-named-instance: 'Regular';
    src: url(/fonts/Inter-roman.var.woff2) format("woff2");
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: Inter, sans-serif;
  }

  *:focus-visible {
    outline: solid blue;
  }
`
