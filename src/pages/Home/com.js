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

  // 更新过程
  componentWillReceiveProps(nextProps) {
    // 在接受父组件改变后的props需要重新渲染组件时用到的比较多
    console.log('componentWillReceiveProps');
    console.log(nextProps);
  }

  render() {
    let { names } = this.props;
    return <h1>{names ? '呵呵呵' : '哈哈哈'}</h1>;
  }
}
export default Welcome;
