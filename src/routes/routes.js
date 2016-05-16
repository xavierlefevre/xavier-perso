import React from 'react';
import main from '../components/main';
import {
  Route,
  IndexRoute,
} from 'react-router';

export default (
  <Route path="/" component={main}>
    <IndexRoute component={main} />
  </Route>
);
