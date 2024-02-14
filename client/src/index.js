import React from 'react';
import { createRoot } from 'react-dom'; // Import createRoot from react-dom
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Use createRoot to create a root
root.render(
  <BrowserRouter > {/* Wrap the entire application with BrowserRouter */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
