import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

// 此组件的意义就是将数据抽离出来，通过传递数据去渲染
@withRouter
class CustomMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      openKeys: [],
      selectedKeys: []
    };
  }

  componentDidMount() {
    // 防止页面刷新侧边栏又初始化了
    const { location } = this.props;
    // 获取当前所在的目录层级
    const rank = location.pathname.split('/');
    switch (rank.length) {
      case 2: // 一级目录
        this.setState({
          selectedKeys: [location.pathname]
        });
        break;
      case 5: // 三级目录，要展开两个subMenu
        this.setState({
          selectedKeys: [location.pathname],
          openKeys: [rank.slice(0, 3).join('/'), rank.slice(0, 4).join('/')]
        });
        break;
      default:
        this.setState({
          selectedKeys: [location.pathname],
          openKeys: [location.pathname.substr(0, location.pathname.lastIndexOf('/'))]
        });
    }
  }

  componentWillReceiveProps(nextProps) {
    // 当点击面包屑导航时，侧边栏要同步响应
    const { location } = this.props;
    if (location.pathname !== nextProps.location.pathname) {
      this.setState({
        selectedKeys: [nextProps.location.pathname],
      });
    }
  }

  onOpenChange = (openKeys) => {
    // 此函数的作用只展开当前父级菜单（父级菜单下可能还有子菜单）
    if (openKeys.length === 0 || openKeys.length === 1) {
      this.setState({
        openKeys
      });
      return;
    }

    // 最新展开的菜单
    const latestOpenKey = openKeys[openKeys.length - 1];
    // 判断最新展开的菜单是不是父级菜单，若是父级菜单就只展开一个，不是父级菜单就展开父级菜单和当前子菜单
    // 因为我的子菜单的key包含了父级菜单，所以不用像官网的例子单独定义父级菜单数组，然后比较当前菜单在不在父级菜单数组里面。
    // 只适用于3级菜单
    if (latestOpenKey.includes(openKeys[0])) {
      this.setState({
        openKeys
      });
    } else {
      this.setState({
        openKeys: [latestOpenKey]
      });
    }
  }

  renderMenuItem = ({ key, icon, title }) => {
    return (
      <Menu.Item key={key}>
        <Link to={key}>
          {icon && <Icon type={icon} />}
          <span>{title}</span>
        </Link>
      </Menu.Item>
    );
  }

  renderSubMenu = ({
    key, title, subs
  }) => {
    return (
      <Menu.SubMenu
        key={key} 
        title={
          <span><span>{title}</span></span>
        }
      >
        {
          subs && subs.map((item) => {
            return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item);
          })
        }
      </Menu.SubMenu>
    );
  }

  render() {
    const { openKeys, selectedKeys } = this.state;
    const { theme, menus } = this.props;
    return (
      <Menu
        onOpenChange={this.onOpenChange}
        onClick={({ key }) => this.setState({ selectedKeys: [key] })}
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        theme={theme}
        mode="inline"
      >
        {
          menus && menus.map((item) => {
            return item.subs && item.subs.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item);
          })
        }
      </Menu>
    );
  }
}

export default CustomMenu;
