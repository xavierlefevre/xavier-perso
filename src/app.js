import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import routes from './routes/routes';

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('main')
);
