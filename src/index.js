import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateInspector } from "reinspect"

ReactDOM.render(
  <React.StrictMode>
     <StateInspector name="space-x-app">
    <App />
    </StateInspector>
  </React.StrictMode>,
  document.getElementById('root')
);
