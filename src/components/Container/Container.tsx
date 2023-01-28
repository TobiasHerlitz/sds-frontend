import { ReactNode } from 'react';

import * as S from './Container.style';

interface ContainerProps {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return <S.Root>{children}</S.Root>;
};
