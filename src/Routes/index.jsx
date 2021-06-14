import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Age from '../pages/Age';
import Home from '../pages/Home';
import Store from '../pages/Store';
import Tecido from '../pages/Tecido';
import StoreItem from '../pages/StoreItem'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Age} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/store" component={Store} />
    <Route exact path="/tecido" component={Tecido} />
    <Route exact path="/Item" component={StoreItem} />
  </Switch>
);

export default Routes;