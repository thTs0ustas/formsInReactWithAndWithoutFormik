import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  
  * {
    --bs-font-sans-serif: "Nunito Sans", sans-serif;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.bgMain};
    margin: 0;
    
    font-family: "Nunito Sans", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
 
  `;
