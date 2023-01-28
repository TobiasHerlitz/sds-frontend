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
      <S.Content>
        <S.IconWrapper>
          <Icon style={{ height: '100%', width: '100%' }}/>
        </S.IconWrapper>
        <S.InnerCard>
          <S.CardHeader>{heading}</S.CardHeader>
          <S.Description>"{quote}"</S.Description>
        </S.InnerCard>
      </S.Content>
    </S.Root>
  );
};
