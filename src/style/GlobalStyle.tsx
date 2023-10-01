import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    color: black;
    font-family: 'Julius Sans One', sans-serif;
    font-weight: 400;
  }

  h2 {
    font-size: 20px;
    letter-spacing: 0.1rem;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 12px;
    padding: 0;
    margin: 0;
  }
`;
