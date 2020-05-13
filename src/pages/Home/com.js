/**
 * @name Home
 * @desc 首页
 * @author
 * @version
 */

import React, { Component } from 'react';

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    let { names } = this.props;
    return <h1>{names}</h1>;
  }
}
export default Welcome;
