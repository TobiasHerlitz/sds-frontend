import styled from './IconWrapper.style';

export const IconWrapper = ({ Icon }) => {
  return (
    <styled.root>
      <Icon style={{ height: '100%', width: '100%' }}/>
    </styled.root>
  );
}
