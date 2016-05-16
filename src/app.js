import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import Routes from './routes/Routes';

ReactDOM.render(
  <Router history={hashHistory} >{Routes}</Router>,
  document.getElementById('main')
);
