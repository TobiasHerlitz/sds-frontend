import styled from 'styled-components';

export const AnimationWrapper = styled("div")<{ openNav: boolean }>`
  margin: 100px;
  width: 400px;
  border: 1px solid black;
  stroke: black;

  ${({ openNav }: any) => !openNav && `
    #one {
      transition: 0.4s;
      d: path("M20,25 L80,25");
    }

    #two {
      transition: 0.4s;
      stroke: black;
      d: path("M20,50 L80,50");
    }

    #three {
      transition: 0.4s;
      d: path("M20,75 L80,75");
    }
  `
  }

  ${({ openNav }: any) => openNav && `
    #one {
      transition: 0.4s;
      d: path("M20,20 L80,80");
      stroke-width: 16px;
    }

    #two {
      transition: 0.4s;
      stroke: white;
      d: path("M50,50 L50,50");
    }

    #three {
      transition: 0.4s;
      d: path("M20,80 L80,20");
      stroke-width: 16px;
    }
  `
  }
`;
