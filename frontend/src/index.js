// index.jsx

import React from 'react';
import { createRoot } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = document.getElementById('root');

const appRoot = createRoot(root);
appRoot.render(
  <Router>
    <App />
  </Router>
);
