import styled from 'styled-components';

export const AnimationWrapper = styled('div')<{ isOpen: boolean }>`
  width: 40px;
  height: 40px;
  cursor: pointer;

  ${({ isOpen }: any) => !isOpen && `
    #one {
      transition: 0.4s;
      d: path("M20,25 L80,25");
    }

    #two {
      transition: 0.4s;
      d: path("M20,50 L80,50");
    }

    #three {
      transition: 0.4s;
      d: path("M20,75 L80,75");
    }
  `
  }

  ${({ isOpen }: any) => isOpen && `
    #one {
      transition: 0.4s;
      d: path("M20,20 L80,80");
    }

    #two {
      transition: 0.4s;
      d: path("M50,50 L50,50");
    }

    #three {
      transition: 0.4s;
      d: path("M20,80 L80,20");
    }
  `
  }
`;
