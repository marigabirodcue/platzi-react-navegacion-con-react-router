// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useStorageListener } from './useStorageListener';
import './ChangeAlert.css';
import PropTypes from 'prop-types';

function ChangeAlert({ sincronize }) {
    ChangeAlert.propTypes = {
        sincronize: PropTypes.any.isRequired,
    }
    const { show, toggleShow } = useStorageListener(sincronize);

    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
                    <p>¿Quieres sincronizar tus TODOs?</p>
                    <button
                        className="TodoForm-button TodoForm-button--add"
                        onClick={toggleShow}
                    >
                        Yes!
                    </button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export { ChangeAlert };