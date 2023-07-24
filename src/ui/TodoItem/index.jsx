// eslint-disable-next-line no-unused-vars
import React from 'react';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { EditIcon } from '../TodoIcon/EditIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import './TodoItem.css';
import PropTypes from 'prop-types';

function TodoItem(props) {
    TodoItem.propTypes = {
        completed: PropTypes.any,
        onComplete: PropTypes.any,
        onDelete: PropTypes.any,
        text: PropTypes.node,
        onEdit: PropTypes.any,
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
            <EditIcon
                onEdit={props.onEdit}
            />
            <DeleteIcon
                onDelete={props.onDelete}
            />
        </li>
    );
}

export { TodoItem };