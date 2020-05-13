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
  constructor() {
    super();
    this.state = {
      name: '测试',
    };
  }

  toggle = () => {
    let { name } = this.state;
    console.log(name);
    this.setState({
      name: '哈哈'
    });
  };
  
  render() {
    let { name } = this.state;
    return (
      <div>
        <Welcome names="Sara" />
        <div className="App">
          <Layout>
            <Content>
              <Button type="primary" onClick={() => this.toggle()}>change</Button>
              <button type="button" onClick={this.toggle.bind()}>
                change
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
