import React, { memo, Suspense, useEffect } from "react";
import { css } from "@emotion/core";
import { Layout, Spin } from "antd";
import { size } from "polished";
import { connect } from "react-redux";
import {
  Route,
  RouteComponentProps,
  Switch,
  withRouter
} from "react-router-dom";
import PageErrorBoundary from "../components/NetErrorBoundary";
import {
  Admin,
  Applet,
  AppletAdmin,
  Error403,
  Error404,
  Help,
  Home,
  Login,
  Register,
  RePassword
} from "../routes/routes";
import { rememberMeApi } from "../api/user/rememberMe_api";

import { action, IActionFn } from "../models/action";

/**
 * 功能
 * 1. 页面加载时的loading 动画 ✅
 * 2. 不匹配路由自动引导至 404 页面 ✅
 * 3. 监测页面加载，添加网络错误边界组件进行监听 ✅
 * 4. 权限认证
 */
interface IProps extends RouteComponentProps, IActionFn {}

const App = memo((props: IProps) => {
  // rememberMe 认证
  useEffect(() => {
    rememberMeApi({
      reduxAction: props.action,
      pathName: props.location.pathname
    })
      .then()
      .catch(reject => {
        props.history.push(reject);
      });
    // eslint-disable-next-line
  }, [props.location.pathname]);

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

  return (
    <Layout css={styles.root}>
      <PageErrorBoundary>
        <Suspense fallback={loading}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/applet/admin" component={AppletAdmin} />
            <Route exact path="/applet" component={Applet} />
            <Route exact path="/user/login" component={Login} />
            <Route exact path="/user/register" component={Register} />
            <Route exact path="/help" component={Help} />
            <Route exact path="/403" component={Error403} />
            <Route exact path="/user/re-password" component={RePassword} />
            <Route component={Error404} />
          </Switch>
        </Suspense>
      </PageErrorBoundary>
    </Layout>
  );
});

export default connect(
  null,
  { action }
)(withRouter(App));
