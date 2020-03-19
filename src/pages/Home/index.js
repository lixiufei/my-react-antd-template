/**
 * @name Home
 * @desc 首页
 * @author
 * @version
 */

import React, { Component } from 'react';
import { Layout } from 'antd';
// import { Link } from 'react-router-dom';
import './index.css';

const { Content } = Layout;

class Home extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    let { collapsed } = this.state;
    console.log(collapsed);
    this.setState({
      collapsed: !collapsed
    });
  };
  
  render() {
    return (
      <div>
        <div className="App">
          <Layout>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280
              }}
            >
              Content
            </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default Home;
