import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

//Index.js initialise
//1) Import React and ReactDOM 
//2) Get reference to div with id "root"
//3, 4, 5) Tell React to take control of that element. Create Component. Show component

//! Index.js должен выполнять сугубо технические задачи и отображение главного компонента "App"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
