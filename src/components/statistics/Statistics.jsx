import PropTypes from 'prop-types';
import { StatsSection, Title } from './Statistics.styles';
import { StatisticsList } from './StatisticsList';

export const Statistics = ({ title, data }) => {
  return (
    <StatsSection>
      {title && <Title>{title}</Title>}

      <StatisticsList data={data} />
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
