import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Age from '../pages/Age';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Age} />
  </Switch>
);

export default Routes;