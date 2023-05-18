import styled from 'styled-components';

const setBgColor = (inputs: any) => {
  const { theme, isOpen } = inputs;
  return isOpen ? `${theme.one}EE` : theme.one;
};

export const Root = styled('div')<{ isOpen: boolean}>`
  position: fixed;
  display: flex;
  flex-direction: row;
  right: 0px;
  top: 10px;
  z-index: 10;
  transform: translateX(400px);
  transition: 0.4s;
  transform: ${({ isOpen }: any) => isOpen
    ? 'translateX(0)'
    : 'translateX(400px)'
  };
`;

export const IconWrapper = styled('div')<{ isOpen: boolean, ref: any  }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 50px;
  padding: 4px;
  border-radius: 10px 0 0 10px;
  transition: 0.4s;
  background-color: ${(input) => setBgColor(input)};
  stroke: white;

  :hover {
    stroke: ${({ theme }) => theme.three};
  }
`;

export const Navbar = styled('nav')<{ isOpen: boolean, ref: any  }>`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 0 10px;
  background-color: ${(input) => setBgColor(input)};
  transition: 0.4s;
  height: 400px;
  width: 400px;
`;