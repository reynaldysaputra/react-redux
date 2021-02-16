import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import BasicRedux from './01_basic/redux';
import AppsCodevolution from './03_withRedux/01_codevolution/app';

ReactDOM.render(
  <React.StrictMode>
    <AppsCodevolution />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
