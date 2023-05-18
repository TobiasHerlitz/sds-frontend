import { useState } from 'react';
import { ReactComponent as ThemeToggle } from '@images/themeToggle.svg';
import * as S from './ThemeToggleIcon.style';

export const ThemeToggleIcon = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <S.AnimationWrapper
      isDarkMode={isDarkMode}
      onClick={() => setIsDarkMode(!isDarkMode)}
      // onClick={() => console.log('clicking')}
    >
      <ThemeToggle />
    </S.AnimationWrapper>
  );
};
