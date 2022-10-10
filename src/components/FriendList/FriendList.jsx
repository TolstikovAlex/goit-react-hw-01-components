import PropTypes from 'prop-types';
import { FriendCard, FriendListBox } from './FriendList.styled';
import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <FriendListBox>
      {friends.map(friend => (
        <FriendCard key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            status={friend.isOnline}
            name={friend.name}
          />
        </FriendCard>
      ))}
    </FriendListBox>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ),
};
