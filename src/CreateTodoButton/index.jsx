// eslint-disable-next-line no-unused-vars
import React from 'react';
import './CreateTodoButton.css';
import PropTypes from 'prop-types';

function CreateTodoButton(props) {
    CreateTodoButton.propTypes = {
        setOpenModal: PropTypes.any.isRequired,
    }
    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    };

    return (
        <button
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };