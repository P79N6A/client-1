import React, { lazy, memo, Suspense } from "react";
import { css } from "@emotion/core";
import { size } from "polished";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from "react-router-dom";
import { Layout, Spin } from "antd";
import PageErrorBoundary from "../components/NetErrorBoundary";

/**
 * 功能
 * 1. 路由拆分
 * 2. 页面加载时的loading 动画
 * 3. 不匹配路由自动引导至 404 页面 （后期将路由功能转移至 redux中进行管理））
 * 4. 监测页面加载，添加网络错误边界组件进行监听
 * 5. 区分移动端与电脑端，并给予不同的显示
 */
const App = memo((props: RouteComponentProps) => {
  const styles = {
    // 页面根样式
    root: css`
      ${size("100vh", "100vw")};
      overflow: hidden;
    `,
    // applet 页面样式
    applet: css`
      ${size("100vh", "100vw")};
      min-width: 1200px;
    `,
    // 加载状态样式
    loading: css`
      margin: 40vh auto;
    `
  };

  const Home = lazy(() => import("../pages/Home"));
  const Applet = lazy(() => import("../pages/applet/Applet"));
  const Error404 = lazy(() => import("../pages/error/Error404"));
  const Login = lazy(() => import("../pages/user/Login"));
  const Register = lazy(() => import("../pages/user/Register"));
  return (
    <Layout
      css={props.location.pathname === "/applet" ? styles.applet : styles.root}
    >
      <PageErrorBoundary>
        <Suspense
          fallback={
            <Spin css={styles.loading} delay={300} tip={"拼命加载中"} />
          }
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/applet" component={Applet} />
            <Route exact path="/user/login" component={Login} />
            <Route exact path="/user/register" component={Register} />
            <Route component={Error404} />
          </Switch>
        </Suspense>
      </PageErrorBoundary>
    </Layout>
  );
});

export default withRouter(App);
