// eslint-disable-next-line no-unused-vars
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './routes/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

//Con React 17 y rect-dom 5
/*ReactDOM.render(
  <App />,
  document.getElementById('root')
);*/

//Con React 18 y rect-dom 6
/**
 * ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
 */