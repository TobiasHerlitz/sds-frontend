import styled, { keyframes } from 'styled-components';

const root = styled.div`
  background: ${({ theme }) => theme.three};
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 6px;
  padding: 20px;
  box-shadow: 4px 3px 8px #00000033;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;

  div {
    bottom: -80px;
  }

  :hover {
    box-shadow: 4px 3px 10px #00000055;

    div {
      bottom: -10px;
    }

    svg {
      fill: ${({ theme }) => `${theme.white}`};
      opacity: 0.2;
    }
  }

  :after {
    position: absolute;
    top: 10px;
    border-radius: 6px;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    content: " ";
    border: 1px solid ${({ theme }) => theme.white};
  }
`;

const textInfo = styled.div`
  width: 100%;
  height: 140px;
  box-sizing: border-box;
  padding: 0 20px;
  position: absolute;
  // bottom: -70px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.three};
  z-index: 1;
  transition: bottom 150ms ease-out 50ms;

  :after {
    position: absolute;
    top: 10px;
    border-radius: 6px;
    width: calc(100% - 20px);
    height: 100%;
    content: " ";
    border: 1px solid ${({ theme }) => theme.three};
  }
`;

const cardHeader = styled.h1`
  margin: 16px 0 8px 0;
  text-transform: uppercase;
`;

const description = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-style: italic;
  text-align: center;
`;

export default {
  root,
  factoryIcon,
  cardHeader,
  description,
  textInfo
};
