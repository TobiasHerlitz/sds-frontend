import { useState } from 'react';
import { ReactComponent as Hamburger } from '@images/hamburger.svg';
import { Link } from 'react-router-dom';
import * as S from './Navbar.style';

export const Navbar = () => {
  return (
    <S.Root>
      <Hamburger />
      <Link to="topics">Topics</Link>
    </S.Root>
  );
};
