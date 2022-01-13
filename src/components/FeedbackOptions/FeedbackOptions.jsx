import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(option => (
    <Button type="button" key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </Button>
  ));
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};

export default FeedbackOptions;
