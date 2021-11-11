import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Gugi', cursive;
    line-height: 1.5;
    background-color: #F4F7F6;
    
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }
`;

export const Grid = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1rem;
`;

export const ResultPage = styled("div")`
  margin: 2rem;
`;
export default GlobalStyle;
