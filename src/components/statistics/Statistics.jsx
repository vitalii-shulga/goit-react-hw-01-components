import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import { Container, Title, StatList } from './Statistics.styled.jsx';

export const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(stat => (
          <StatisticsItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
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
};
