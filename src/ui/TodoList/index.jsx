// eslint-disable-next-line no-unused-vars
import React from 'react';
import './TodoList.css';
import PropTypes from 'prop-types';

function TodoList(props) {
    TodoList.propTypes = {
        children: PropTypes.any.isRequired,
        render: PropTypes.node,
        error: PropTypes.node.isRequired,
        onError: PropTypes.any.isRequired,
        loading: PropTypes.any.isRequired,
        onLoading: PropTypes.any.isRequired,
        totalTodos: PropTypes.node.isRequired,
        onEmptyTodos: PropTypes.any.isRequired,
        searchedTodos: PropTypes.any.isRequired,
        onEmptySearchResults: PropTypes.any.isRequired,
        searchText: PropTypes.node.isRequired,
    }
    const renderFunc = props.children || props.render;

    return (
        <section className="TodoList-container">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}

            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptySearchResults(props.searchText)}

            {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
        </section>
    );
}

export { TodoList };