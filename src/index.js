import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateInspector } from "reinspect"
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
     <StateInspector name="App">
    <App />
    </StateInspector>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals(console.log);
