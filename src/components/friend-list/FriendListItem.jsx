import PropTypes from 'prop-types';
export const FriendListItem = ({ avatar, name, status, id }) => {
  return (
    <>
    <span className="status">{status}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
    </>
  
  )

}

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};