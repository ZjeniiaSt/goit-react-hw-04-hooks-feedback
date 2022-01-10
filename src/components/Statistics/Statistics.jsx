import PropTypes from 'prop-types';
import { Container, StatisticsList, StatisticsItem } from './Statistics.styled';

function Statistics({ options, total, positivePercentage }) {
  return (
    <Container>
      <StatisticsList>
        {Object.entries(options).map(([key, value]) => (
          <StatisticsItem key={key}>
            {key}: {value}
          </StatisticsItem>
        ))}
        <StatisticsItem>Total: {total}</StatisticsItem>
        <StatisticsItem>Positive feedback: {positivePercentage} %</StatisticsItem>
      </StatisticsList>
    </Container>
  );
}

Statistics.propTypes = {
  options: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
