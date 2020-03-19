import React from 'react';
import { withRouter, Switch, Redirect } from 'react-router-dom';
import LoadableComponent from '../../utils/LoadableComponent';
import PrivateRoute from '../PrivateRoute';

const Home = LoadableComponent(() => import('../../pages/Home/index')); // 参数一定要是函数，否则不会懒加载，只会代码拆分

// 基本组件Demo
const ButtonDemo = LoadableComponent(() => import('../../pages/Table/index'));
const IconDemo = LoadableComponent(() => import('../../pages/Home/index'));

// 输入组件Demo
const FormDemo1 = LoadableComponent(() => import('../../pages/Home/index'));
const FormDemo2 = LoadableComponent(() => import('../../pages/Home/index'));
const UploadDemo = LoadableComponent(() => import('../../pages/Home/index'));

@withRouter
class ContentMain extends React.Component {
  render() {
    return (
      <div style={{ padding: 3, position: 'relative' }}>
        <Switch>
          <PrivateRoute exact path="/home" component={Home} />

          <PrivateRoute exact path="/home/general/button" component={ButtonDemo} />
          <PrivateRoute exact path="/home/general/icon" component={IconDemo} />

          <PrivateRoute exact path="/home/entry/form/basic-form" component={FormDemo1} />
          <PrivateRoute exact path="/home/entry/form/step-form" component={FormDemo2} />
          <PrivateRoute exact path="/home/entry/upload" component={UploadDemo} />


          <Redirect exact from="/" to="/home" />
        </Switch>
      </div>
    );
  }
}

export default ContentMain;
