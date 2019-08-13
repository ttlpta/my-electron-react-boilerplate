import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './constants/routes';

import S from "./screens";

export default () => (
  <Router>
    <Switch>
      <Route path={routes.COUNTER} component={S.Counter} />
      <Route path={routes.HOME} component={S.Home} />
    </Switch>
  </Router>
);
