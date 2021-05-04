import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import  {GlobalStyles}  from './globalStyles';
import 'normalize.css';
import Context from './Context/Context'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles/>
    <Context>
      <App />
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);