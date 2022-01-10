import PropTypes from 'prop-types';
import { Container, Button } from './FeedbackOptions.styled';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Container>
      {Object.keys(options).map(key => (
        <Button key={key} onClick={() => onLeaveFeedback(key)}>
          {key}
        </Button>
      ))}
    </Container>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
