import styled from './TopicCardNew.style';

export const TopicCard = ({
  heading = 'PLACEHOLDER',
  quote = 'Description',
  Icon
}) => {
  return (
    <styled.root>
      <styled.content>
        <styled.iconWrapper>
          <Icon style={{ height: '100%', width: '100%' }}/>
        </styled.iconWrapper>
        <styled.innerCard>
          <styled.cardHeader>{heading}</styled.cardHeader>
          <styled.description>"{quote}"</styled.description>
        </styled.innerCard>
      </styled.content>
    </styled.root>
  );
};
