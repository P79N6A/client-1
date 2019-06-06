import React, { memo, Suspense } from "react";
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
import { action, IActionFn } from "../store/action";
import Register from "../pages/trader/Register";

/**
 * 功能
 * 1. 页面加载时的loading 动画 ✅
 * 2. 不匹配路由自动引导至 404 页面 ✅
 * 3. 监测页面加载，添加网络错误边界组件进行监听 ✅
 * 4. 权限认证
 */
interface IProps extends RouteComponentProps, IActionFn {}

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

  return (
    <Layout css={styles.root}>
      <Suspense fallback={loading}>
        <Switch>
          <Route exact path="/trader/register" component={Register} />
        </Switch>
      </Suspense>
    </Layout>
  );
});

export default connect(
  null,
  { action }
)(withRouter(App));
