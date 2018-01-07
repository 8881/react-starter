import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DefaultPage from './containers/default/index';
import Test from './containers/test/index';
import Foo from './containers/foo/index';
import Login from './containers/login/index';
import Admin from './containers/admin/index';

const routes = (
  <Switch>
    <Route exact path="/" component={DefaultPage}></Route>
    <Route exact path="/test" component={Test}></Route>
    <Route exact path="/foo" component={Foo}></Route>
    <Route exact path="/login" component={Login}></Route>
    <Route exact path="/admin" component={Admin}></Route>
  </Switch>
);

export default routes;
