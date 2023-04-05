import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Keyboard from './keyboard.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Keyboard />
  </React.StrictMode>
);
