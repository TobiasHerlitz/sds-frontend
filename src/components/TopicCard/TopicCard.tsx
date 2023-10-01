import * as S from './TopicCard.style';

interface TopicCardProps {
  heading: string
  quote: string
  Icon: any
}

export const TopicCard = ({
  heading = 'PLACEHOLDER',
  quote = 'Description',
  Icon
}: TopicCardProps) => {
  return (
    <S.Root>
      <S.IconWrapper>
        <S.IconInset>
          <Icon style={{ height: '100%', width: '100%' }}/>
        </S.IconInset>
      </S.IconWrapper>
        <S.TextWrapper id="textWrapper">
          <h2>{heading}</h2>
          <p>"{quote}"</p>
        </S.TextWrapper>
    </S.Root>
  );
};
