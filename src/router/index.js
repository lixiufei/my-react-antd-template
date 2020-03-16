/**
 * @name Router
 * @desc 页面路由配置
 */

import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../pages/Home';
import Table from '../pages/Table';

class Router extends Component {
  render() {
    return (
      <Switch>
        <Redirect path="/" to="/home" exact />
        <Route path="/home" component={Home} />
        <Route path="/table" component={Table} />
      </Switch>
    );
  }
}

export default Router;
