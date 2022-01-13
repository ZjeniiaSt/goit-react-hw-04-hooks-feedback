import PropTypes from 'prop-types';
import { Container, StatisticsList, StatisticsItem } from './Statistics.styled';

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <Container>
      <StatisticsList>
        <StatisticsItem>Good: {good}</StatisticsItem>
        <StatisticsItem>Neutral: {neutral}</StatisticsItem>
        <StatisticsItem>Bad: {bad}</StatisticsItem>
        <StatisticsItem>Total: {total}</StatisticsItem>
        <StatisticsItem>Positive feedback: {positivePercentage} %</StatisticsItem>
      </StatisticsList>
    </Container>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
