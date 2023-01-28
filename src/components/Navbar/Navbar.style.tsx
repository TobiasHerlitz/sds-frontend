import styled from 'styled-components';

export const Root = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.one};
  z-index: 10;
`;
