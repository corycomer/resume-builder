// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/resume-builder">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

