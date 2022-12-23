import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavigationProvider } from './context/navigation';
import App from './components/App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavigationProvider>
      <App />
    </NavigationProvider>
  </React.StrictMode>
);

