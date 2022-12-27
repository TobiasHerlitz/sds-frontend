import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.one};
    margin: 0;
    // color: ${({ theme }) => theme.four};
    color: black;
    font-family: arial;
    font-weight: 400;
  }
`;
