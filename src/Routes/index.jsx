import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Age from '../pages/Age';
import Home from '../pages/Home';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Age}/>
        <Route exact path="/home" component={Home}/>
    </Switch>
);

export default Routes;