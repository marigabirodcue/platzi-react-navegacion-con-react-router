// eslint-disable-next-line no-unused-vars
import React from 'react';
import './TodoCounter.css';
import PropTypes from 'prop-types';

function TodoCounter({ totalTodos, completedTodos, loading }) {
    TodoCounter.propTypes = {
        totalTodos: PropTypes.node.isRequired,
        completedTodos: PropTypes.node.isRequired,
        loading: PropTypes.any,
    }
    return (
        <h2
            className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
        >
            Has completado {completedTodos} de {totalTodos} TODOs
        </h2>
    );
}

export { TodoCounter };