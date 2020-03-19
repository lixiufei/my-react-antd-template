import React from 'react';
import CustomMenu from './menu';

const menus = [
  {
    title: '首页',
    icon: 'home',
    key: '/home'
  },
  {
    title: '基本组件',
    icon: 'laptop',
    key: '/home/general',
    subs: [
      { key: '/home/general/button', title: '按钮', icon: '' },
      { key: '/home/general/icon', title: '图标', icon: '' },
    ]
  },
  {
    title: '输入组件',
    icon: 'edit',
    key: '/home/entry',
    subs: [
      {
        key: '/home/entry/form',
        title: '表单',
        icon: '',
        subs: [
          { key: '/home/entry/form/basic-form', title: '基础表单', icon: '' },
          { key: '/home/entry/form/step-form', title: '分步表单', icon: '' }
        ]
      },
      { key: '/home/entry/upload', title: '上传', icon: '' },
    ]
  },
  {
    title: '关于',
    icon: 'info-circle-o',
    key: '/home/about'
  }
];

class SiderNav extends React.Component {
  render() {
    return (
      <div style={{ height: '100vh', overflowY: 'auto' }}>
        <div style={styles.logo}> </div>
        <CustomMenu menus={menus} />
      </div>
    );
  }
}

const styles = {
  logo: {
    height: '32px',
    background: 'rgba(255, 255, 255, .2)',
    margin: '16px'
  }
};

export default SiderNav;
