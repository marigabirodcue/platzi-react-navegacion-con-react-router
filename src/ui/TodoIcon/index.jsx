// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as EditSVG } from './edit.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';
import PropTypes from 'prop-types';

const iconTypes = {
    "check": color => (
        <CheckSVG className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "edit": color => (
        <EditSVG className="Icon-svg Icon-svg--edit" fill={color} />
    ),
    "delete": color => (
        <DeleteSVG className="Icon-svg Icon-svg--delete" fill={color} />
    ),
};

function TodoIcon({ type, color = 'gray', onClick }) {
    TodoIcon.propTypes = {
        type: PropTypes.node.isRequired,
        color: PropTypes.node,
        onClick: PropTypes.any.isRequired,
    }
    return (
        <span
            className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    );
}

export { TodoIcon };