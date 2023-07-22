// eslint-disable-next-line no-unused-vars
import React from 'react';
import { TodoIcon } from './';
import PropTypes from 'prop-types';

function EditIcon({ onEdit }) {
    EditIcon.propTypes = {
        onEdit: PropTypes.any,
    }
    return (
        <TodoIcon
            type="edit"
            onClick={onEdit}
        />
    );
}

export { EditIcon };