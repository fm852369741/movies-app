import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);