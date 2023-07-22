// eslint-disable-next-line no-unused-vars
import React from 'react';
import { TodoIcon } from './';
import PropTypes from 'prop-types';

function DeleteIcon({ onDelete }) {
    DeleteIcon.propTypes = {
        onDelete: PropTypes.any.isRequired,
    }
    return (
        <TodoIcon
            type="delete"
            onClick={onDelete}
        />
    );
}

export { DeleteIcon };