// eslint-disable-next-line no-unused-vars
import React from 'react';
import './CreateTodoButton.css';
import PropTypes from 'prop-types';

function CreateTodoButton(props) {
    CreateTodoButton.propTypes = {
        onClick: PropTypes.any.isRequired,
    }

    return (
        <button
            className="CreateTodoButton"
            onClick={props.onClick}
        >
            +
        </button>
    );
}

export { CreateTodoButton };