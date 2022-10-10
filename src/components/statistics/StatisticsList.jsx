import PropTypes from 'prop-types';
import { ListItem, StatsList } from './StatisticsList.styles';
import { StatisticsListItem } from './StatisticsListItem';
export const StatisticsList = ({ data }) => {
  return (
    <StatsList>
      {data.map(({ id, label, percentage }) => (
        <ListItem key={id}>
          <StatisticsListItem id={id} label={label} percentage={percentage} />
        </ListItem>
      ))}
    </StatsList>
  );
};

StatisticsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
