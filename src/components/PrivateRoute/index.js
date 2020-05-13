import React from 'react';
import { Route } from 'react-router-dom';

/*eslint-disable*/
function test() {
  return true
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route 
    {...rest}
    render={(props) => (
      <Component {...props} /> 
    )}
  />
);

export default PrivateRoute;
