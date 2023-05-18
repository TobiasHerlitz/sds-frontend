import { ReactComponent as OpenClose } from '@images/openClose.svg';
import * as S from './OpenCloseIcon.style';

interface OpenCloseIconProps {
  isOpen: boolean;
  handleClick: any
}

export const OpenCloseIcon = ({ isOpen, handleClick }: OpenCloseIconProps) => {
  return (
    <S.AnimationWrapper isOpen={isOpen} onClick={handleClick}>
      <OpenClose />
    </S.AnimationWrapper>
  );
};
