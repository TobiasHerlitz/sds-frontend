import styled from 'styled-components';

export const IconWrapper = styled.div`
  color: ${({ theme }) => theme.white};
  transition: opacity 150ms ease-out 50ms, transform 150ms ease-out 50ms;
  padding: 20px;
  height: 160px;
  width: 160px;
  height: auto;
`;

export const InnerCard = styled.div`
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

// Holds references to IconWrapper and InnerCard, declaration needs to be below
export const Root = styled.div`
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

    ${IconWrapper} {
      transform: scale(0.7) translateY(-40px);
      opacity: 0.2;
    }

    ${InnerCard} {
      bottom: 0px;
    }
  }
`;

export const Content = styled.div`
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
`;

export const CardHeader = styled.h1`
  margin: 16px 0 8px 0;
  text-transform: uppercase;
`;

export const Description = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-style: italic;
  text-align: center;
`;
