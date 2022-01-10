import PropTypes from 'prop-types';
import { StatItem, Label, Percentage } from './StatisticsItem.styled.jsx';

export const StatisticsItem = ({ label, percentage }) => {
  return (
    <StatItem>
      <Label>{label}</Label>
      <Percentage>{percentage}%</Percentage>
    </StatItem>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
