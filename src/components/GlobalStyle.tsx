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

  #gatsby-focus-wrapper {
    min-height: 100vh;
    display: flex;
    flex-direction: column;  
  }

  @supports (min-height: 100dvh) {
    #gatsby-focus-wrapper {
      min-height: 100dvh;
    }
  }

  #gatsby-focus-wrapper > * {
    min-width: 0;
    width: 100%;
  }

  body {
    font-family: Inter, sans-serif;
  }

  *:focus-visible {
    outline: solid #2762ff;
  }

  button {
    padding: 0;
    appearance: none;
    background: none;
    border: none;
    cursor: pointer;
  }
`
