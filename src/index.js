import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/styles/index.css';
import Statistic from './pages/Statistic.js';
import Process from './pages/Process.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Statistic />
    <Process />
  </React.StrictMode>
);



