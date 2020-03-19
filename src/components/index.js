import React from 'react';
import { Layout } from 'antd';
import SiderNav from './sidebar';
import ContentMain from './content';
// import HeaderBar from '../../components/HeaderBar';

// const { Sider, Header, Content, Footer } = Layout;
const { Sider, Content } = Layout;

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false
    };
  }

  toggle = () => {
    let { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed
    });
  }

  render() {
    let { collapsed } = this.state;
    // 设置Sider的minHeight可以使左右自适应对齐
    return (
      <div id="page">
        <Layout>
          <Sider collapsible trigger={null} collapsed={collapsed}>
            <SiderNav />
          </Sider>
          <Layout>
            {/* <Header style={{background: '#fff', padding: '0 16px'}}>
              <HeaderBar collapsed={this.state.collapsed} onToggle={this.toggle}/>
            </Header> */}
            <Content>
              <ContentMain />
            </Content>
            {/* <Footer style={{textAlign: 'center'}}>React-Admin ©2018 Created by 137596665@qq.com></Footer> */}
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default Index;
