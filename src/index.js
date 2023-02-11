import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// style
import "./style/home.css"
import "./style/about.css"
import "./style/navbar.css"
import "./style/footer.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);