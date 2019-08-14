import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './constants/routes';

import S from "./screens";

export default () => (
  <Router>
    <Switch>
      <Route path={`${routes.NEWS}/:cat?`} component={S.News} />
      <Route path={routes.HOME} component={S.Home} />
    </Switch>
  </Router>
);
