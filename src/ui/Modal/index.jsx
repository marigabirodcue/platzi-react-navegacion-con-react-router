// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import PropTypes from 'prop-types';

function Modal({ children }) {
    Modal.propTypes = {
        children: PropTypes.node.isRequired,
    }
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { Modal };