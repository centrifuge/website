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

  body {
    font-family: Inter, sans-serif;
  }
`
