import PropTypes from 'prop-types';
import { Message } from './Notofication.styled';

function Notification({ message }) {
  return <Message>{message}</Message>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
