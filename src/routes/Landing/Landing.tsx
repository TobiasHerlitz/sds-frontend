import { useState } from 'react';
import { ReactComponent as Animation } from '@images/animation.svg';

import * as S from './Landing.style';

export const Landing = () => {
  const [openNav, setOpenNav] = useState(false);
  console.log(openNav);
  return (
    <>
      <p>This is landing</p>
      <S.AnimationWrapper openNav={openNav} onClick={() => setOpenNav(!openNav)}>
        <Animation />
      </S.AnimationWrapper>
    </>
  );
};
