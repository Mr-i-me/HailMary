import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Age from '../pages/Age';
import Home from '../pages/Home';
import Store from '../pages/Store';
import Tecido from '../pages/Tecido_';
import StoreItem from '../pages/StoreItem'
import About from '../pages/About'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Age} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/store" component={Store} />
    <Route exact path="/tecido" component={Tecido} />
    <Route exact path="/Item" component={StoreItem} />
    <Route exact path="/Sobre" component={About} />
  </Switch>
);

export default Routes;