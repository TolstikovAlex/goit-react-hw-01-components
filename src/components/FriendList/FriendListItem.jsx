import PropTypes from 'prop-types';
import { Avatar, Name, Status } from './FriendListItem.styled';
export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <>
      <Status status={status}>{status}</Status>
      <Avatar src={avatar} alt={name} />
      <Name>{name}</Name>
    </>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
