import styled, { keyframes } from 'styled-components';

import { ReactComponent as Factory } from '/src/assets/images/factory.svg';

const iconWrapper = styled.div`
  color: ${({ theme }) => theme.white};
  transition: opacity 150ms ease-out 50ms, transform 150ms ease-out 50ms;
  padding: 20px;
  height: 160px;
  width: 160px;
  height: auto;
`;

const content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: f;
  overflow: hidden;
  border-radius: 6px;
  height: 100%;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.white};
`

const innerCard = styled.div`
  position: absolute;
  width: 100%;
  height: 140px;
  box-sizing: border-box;
  padding: 0 20px;
  bottom: -80px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.three};
  z-index: 1;
  transition: bottom 150ms ease-out 50ms;
`;

const root = styled.div`
  background: ${({ theme }) => theme.three};
  width: 300px;
  height: 300px;
  border-radius: 6px;
  padding: 10px;
  box-shadow: 4px 3px 8px #00000033;
  box-sizing: border-box;
  display: flex;
  place-items: center;
  cursor: pointer;

  :hover {
    box-shadow: 4px 3px 10px #00000055;

    ${iconWrapper} {
      transform: scale(0.7) translateY(-40px);
      opacity: 0.2;
    }

    ${innerCard} {
      bottom: 0px;
    }
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
  iconWrapper,
  cardHeader,
  description,
  innerCard,
  content
};
