import { useState, useCallback, useEffect, useRef } from 'react';
import { OpenCloseIcon } from '@components';
import { useClickOutside, useKeypress } from '@hooks';
import { Link } from 'react-router-dom';
import * as S from './Navbar.style';

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const navRef = useRef<HTMLElement>();
  const iconWrapperRef = useRef<HTMLElement>();

  useKeypress({
    key: 'm',
    callback: () => setNavOpen(!navOpen)
  });

  useClickOutside({
    refs: [navRef, iconWrapperRef],
    callback: () => setNavOpen(false)
  });

  return (
    <S.Root isOpen={navOpen}>
    <S.IconWrapper isOpen={navOpen} ref={iconWrapperRef}>
      <OpenCloseIcon
        isOpen={navOpen}
        handleClick={() => setNavOpen(!navOpen)}
      />
    </S.IconWrapper>
    <S.Navbar isOpen={navOpen} ref={navRef}>
      <Link to="">Landing</Link>
      <Link to="topics">Topics</Link>
    </S.Navbar>
    </S.Root>
  );
};
