// eslint-disable-next-line no-unused-vars
import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';
import PropTypes from 'prop-types';

function TodoItem(props) {
    TodoItem.propTypes = {
        completed: PropTypes.any,
        onComplete: PropTypes.any,
        onDelete: PropTypes.any,
        text: PropTypes.node,
    }
    return (
        <li className="TodoItem">
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            />
            <p
                className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}
            >
                {props.text}
            </p>
            <DeleteIcon
                onDelete={props.onDelete}
            />
        </li>
    );
}

export { TodoItem };