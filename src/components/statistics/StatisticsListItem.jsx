import PropTypes from 'prop-types';
import { Label, Percent } from './StatisticsListItem.styled';
export const StatisticsListItem = ({ label, percentage }) => {
  return (
    <>
      <Label>{label}</Label>
      <Percent>{percentage}</Percent>
    </>
  );
};
StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
