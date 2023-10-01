import styled from 'styled-components';

const cardDiameter = 100;

export const Root = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 500px;
  gap: 10px;
  padding: 10px;
  :hover {
    cursor: pointer;
    #textWrapper {
      border-top: 1px solid ${({ theme }) => theme.one};
      border-bottom: 1px solid ${({ theme }) => theme.one};
    }
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  flex: 0 0 ${cardDiameter}px;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.one};

  width: ${cardDiameter}px;
  height: ${cardDiameter}px;
  border-radius: ${cardDiameter}px;

  padding: 5px;
  box-shadow: 4px 3px 8px #00000033;
`;

export const IconInset = styled.div`
  color: ${({ theme }) => theme.white};
  border: 1px solid ${({ theme }) => theme.white};
  border-radius: 100%;
  overflow: hidden;
  width: 90%;
  height: 90%;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  width: 100%;
  height: ${cardDiameter - 10}px;
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  padding: 10px;
`;