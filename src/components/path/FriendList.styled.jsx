import styled from 'styled-components';

export const FriendListBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  width: ${p => p.theme.sizes.friendCard};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.medium};
`;
