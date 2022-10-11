import PropTypes from 'prop-types';
import {
  Avatar,
  Location,
  Name,
  ProfileCard,
  ProfileMain,
  Stats,
  StatsItem,
  StatsLabel,
  StatsValue,
  Tag,
} from './Blabla.styled';

export const Blabla = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <ProfileCard>
      <ProfileMain>
        <Avatar src={avatar} alt={username} />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </ProfileMain>

      <Stats>
        <StatsItem>
          <StatsLabel>Followers</StatsLabel>
          <StatsValue>{stats.followers}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Views</StatsLabel>
          <StatsValue>{stats.views}</StatsValue>
        </StatsItem>
        <StatsItem>
          <StatsLabel>Likes</StatsLabel>
          <StatsValue>{stats.likes}</StatsValue>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};
Blabla.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
