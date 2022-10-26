import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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

  ul {
    list-style: none;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  a:focus-visible,
  button:focus-visible {
    outline: solid #2762ff;
  }

  button {
    padding: 0;
    appearance: none;
    background: none;
    border: none;
    cursor: pointer;
  }

  address {
    font-style: normal;
  }
`
