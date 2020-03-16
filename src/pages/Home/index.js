/**
 * @name Home
 * @desc 首页
 * @author
 * @version
 */

import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';

const { Header, Sider, Content } = Layout;

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
    let { collapsed } = this.state;
    return (
      <div>
        <div className="App">
          <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <Link to="table">
                    <Icon type="user" />
                    <span>nav 1</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="home">
                    <Icon type="video-camera" />
                    <span>nav 2</span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="home">
                    <Icon type="upload" />
                    <span>nav 3</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={collapsed ? 'menu-unfold' : 'menu-fold'} 
                  onClick={this.toggle}
                />
              </Header>
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
          </Layout>
        </div>
      </div>
    );
  }
}

export default Home;
