/**
 * @name Home
 * @desc 首页
 * @author
 * @version
 */

import React, { Component } from 'react';
import { Layout, Button } from 'antd';
// import { Link } from 'react-router-dom';
import './index.css';
import Welcome from './com';

const { Content } = Layout;

class Home extends Component {
  // 1. 挂载卸载过程
  constructor() {
    super();
    this.state = {
      name: '测试',
      param: '参数'
    };
    // 完成了React数据的初始化
    console.log('constructor');
  }

  componentWillMount() {
    // 已经经历了constructor()初始化数据后，但是还未渲染DOM时
    console.log('componentWillMount');
  }

  componentDidMount() {
    // dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    // 完成组件的卸载和数据的销毁
    console.log('componentWillUnmount');
  }

  // 更新过程
  componentWillReceiveProps(nextProps) {
    // 在接受父组件改变后的props需要重新渲染组件时用到的比较多
    console.log('componentWillReceiveProps');
    console.log(nextProps);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 控制组件重新渲染的生命周期
    console.log('shouldComponentUpdate');
    console.log(nextProps, nextState);
    return true; // 记得要返回true，return false可以阻止组件的更新
  }

  componentWillUpdate(nextProps, nextState) {
    // 组件进入重新渲染的流程
    console.log('componentWillUpdate');
    console.log(nextProps, nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    // 组件更新完毕，这里可以拿到prevProps和prevState，即更新前的props和state
    console.log('componentDidUpdate');
    console.log(prevProps, prevState);
  }


  toggle = () => {
    // let { name } = this.state;
    // console.log(name);
    this.setState({
      name: '哈哈'
    });
  };

  toggleParam = () => {
    // let { param } = this.state;
    // console.log(param);
    this.setState({
      param: '哈哈'
    });
  };

  render() {
    // 生成虚拟dom树
    console.log('render');
    let { name, param } = this.state;
    return (
      <div>
        <div className="App">
          <Layout>
            <Content>
              <Button type="primary" onClick={() => this.toggle()}>
                change name
              </Button>
              <Welcome names={param} />
              <button type="button" onClick={this.toggleParam.bind()}>
                change param
              </button>
              { name }
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default Home;
