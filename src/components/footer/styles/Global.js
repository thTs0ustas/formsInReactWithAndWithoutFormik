import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Work+Sans&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 1.15em;
  }
`;

export default GlobalStyle;
