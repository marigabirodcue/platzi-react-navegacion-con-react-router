import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoForm.css';
import PropTypes from 'prop-types';

function TodoForm(props) {
    TodoForm.propTypes = {
        props: PropTypes.any,
        submitEvent: PropTypes.any.isRequired,
        label: PropTypes.any.isRequired,
        submitText: PropTypes.any.isRequired,
        defaultTodoText: PropTypes.any.isRequired,
    }
    const navigate = useNavigate();
    const [newTodoValue, setNewTodoValue] = React.useState(props.defaultTodoText || '');

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };
    const onCancel = () => {
        navigate('/');
    };
    const onSubmit = (event) => {
        event.preventDefault();
        navigate('/');
        props.submitEvent(newTodoValue);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>{props.label}</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Cortar la cebolla oara el almuerzo"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button TodoForm-button--cancel"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="TodoForm-button TodoForm-button--add"
                >
                    {props.submitText}
                </button>
            </div>
        </form>
    );
}

export { TodoForm };