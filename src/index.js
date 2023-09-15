import React from 'react';
import App from './App';
import * as themes from './theme/schema.json';
import { setToLS } from './storage.js';
import { createRoot } from 'react-dom/client'


//Index should load all themes from schema.json into local storage.



  setToLS('all-themes', themes.default);
  const root = createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




