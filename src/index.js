import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import reportWebVitals from './reportWebVitals';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
  <App />
</React.StrictMode>

  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
);
reportWebVitals();