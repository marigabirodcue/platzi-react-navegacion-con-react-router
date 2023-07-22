// eslint-disable-next-line no-unused-vars
import React from 'react';
import { TodoIcon } from '.';
import PropTypes from 'prop-types';

function CompleteIcon({ completed, onComplete }) {
  CompleteIcon.propTypes = {
    completed: PropTypes.any,
    onComplete: PropTypes.any,
  }
  return (
    <TodoIcon
      type="check"
      color={completed ? '#4caf50' : 'gray'}
      onClick={onComplete}
    />
  );
}

export { CompleteIcon };