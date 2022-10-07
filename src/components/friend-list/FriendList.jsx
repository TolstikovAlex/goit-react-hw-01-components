import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
export const FriendList = ({friends}) => {
  return (
    <ul className="friend-list">
      {friends.map(friend =>
      (<li className="item" key={friend.id}>
        <FriendListItem
          avatar={friend.avatar}
          status={friend.isOnline}
          name={friend.name}
      />
      </li>))}
    </ul>
  )
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired})),
  }