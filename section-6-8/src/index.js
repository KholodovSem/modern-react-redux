import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from './context/BookContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
);