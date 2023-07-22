import React from 'react';
import PropTypes from 'prop-types';

function TodoHeader({ children, loading }) {
    TodoHeader.propTypes = {
        children: PropTypes.node.isRequired,
        loading: PropTypes.node.isRequired,
    }
    return (
        <header>
            {
                React.Children
                    .toArray(children)
                    .map(child => React.cloneElement(child, { loading }))
            }
        </header>
    );
}

export { TodoHeader };