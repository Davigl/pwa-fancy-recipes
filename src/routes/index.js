import React from 'react';
import {
  HashRouter, Route, Switch
} from 'react-router-dom';

import NotFound from '~/pages/NotFound';
import Home from '~/pages/Home';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Switch>
  </HashRouter>
);

export default Routes;
