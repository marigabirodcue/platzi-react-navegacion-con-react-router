// eslint-disable-next-line no-unused-vars
import React from 'react';
import './TodoSearch.css';
import PropTypes from 'prop-types';

function TodoSearch({ searchValue, setSearchValue, loading }) {
    TodoSearch.propTypes = {
        searchValue: PropTypes.node.isRequired,
        setSearchValue: PropTypes.any.isRequired,
        loading: PropTypes.node,
    }
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input
            className="TodoSearch"
            placeholder="Cebolla"
            value={searchValue}
            onChange={onSearchValueChange}
            disabled={loading}
        />
    );
}

export { TodoSearch };