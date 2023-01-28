import { useState } from 'react';
import { ReactComponent as Hamburger } from '@images/hamburger.svg';
import { Link } from 'react-router-dom';
import styled from './Navbar.style';

export const Navbar = () => {
  return (
    <styled.root>
      <Hamburger />
      <Link to="topics">Topics</Link>
    </styled.root>
  );
};
