import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DefaultPage from './containers/default/index';
import Test from './containers/test/index';
import Foo from './containers/foo/index';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={DefaultPage}></Route>
    <Route exact path="/test" component={Test}></Route>
    <Route exact path="/foo" component={Foo}></Route>
  </Switch>
);

export default Routes;
