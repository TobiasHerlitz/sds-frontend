import * as S from './IconWrapper.style';

interface IconWrapperProps {
  Icon: any
}

export const IconWrapper = ({ Icon }: IconWrapperProps) => {
  return (
    <S.Root>
      <Icon style={{ height: '100%', width: '100%' }}/>
    </S.Root>
  );
};
