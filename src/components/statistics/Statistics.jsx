import PropTypes from 'prop-types';
import {
  Container,
  Title,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled.jsx';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
