import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    background-color: ${({ theme }) => theme.background};
    min-height: 100vh;
  }
  
  a {
    text-decoration: none;
  }
  
  textarea {
    border: none;
    outline: none;
  }
  
  button {
    border: none;
    outline: none;
    background-color: transparent;
  }
`

export default GlobalStyles
