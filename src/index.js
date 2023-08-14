import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as themes from './theme/schema.json';
import { setToLS } from './storage.js';


//Index should load all themes from schema.json into local storage.


const Index = () => {
  setToLS('all-themes', themes.default);
  return(
    <App />
  )
}

ReactDOM.render(
  <Index />, 
  document.getElementById('root')
  
);



