import React, { memo, Suspense, lazy } from "react";
import { css } from "@emotion/core";
import { Layout, Spin } from "antd";
import { size } from "polished";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from "react-router-dom";

/**
 * 功能
 * 1. 页面加载时的loading 动画 ✅
 * 2. 不匹配路由自动引导至 404 页面 ✅
 * 3. 监测页面加载，添加网络错误边界组件进行监听 ✅
 * 4. 权限认证
 */
interface IProps extends RouteComponentProps {}

const App = memo((props: IProps) => {
  // 样式
  const styles = {
    // 页面根样式
    root: css`
      ${size("100vh", "100vw")};
      overflow: hidden;
    `,
    // 加载状态样式
    loading: css`
      margin: 40vh auto;
    `
  };

  // 页面加载样式组件
  const loading = <Spin css={styles.loading} delay={300} tip={"拼命加载中"} />;

  // 页面切割
  const Register = lazy(() => import("../pages/trader/Register"));
  const Login = lazy(() => import("../pages/trader/Login"));
  const RePassword = lazy(() => import("../pages/trader/RePassword"));
  const Admin = lazy(() => import("../pages/admin/Admin"));
  return (
    <Layout css={styles.root}>
      <Suspense fallback={loading}>
        <Switch>
          <Route exact path="/trader/register" component={Register} />
          <Route path="/trader/login" component={Login} />
          <Route path="/trader/re-password" component={RePassword} />
          <Route path="/admin" component={Admin} />
        </Switch>
      </Suspense>
    </Layout>
  );
});

export default withRouter(App);
