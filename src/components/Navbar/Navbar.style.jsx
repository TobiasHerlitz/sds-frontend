import styled from 'styled-components';

const root = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  background-color: ${({ theme }) => theme.one};
`;

export default {
  root
};
