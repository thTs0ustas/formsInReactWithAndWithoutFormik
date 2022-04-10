import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  
  * {
    --bs-font-sans-serif: "Nunito Sans", sans-serif;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.body};
    margin: 0;
    transition: all 200ms linear;
    font-family: "Nunito Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
 
  `;
