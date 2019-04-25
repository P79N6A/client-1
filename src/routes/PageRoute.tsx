import React, { memo, Suspense, lazy } from "react";
import { css } from "@emotion/core";
import { Spin } from "antd";
import { Route, Switch } from "react-router-dom";

/**
 * TODO 路由切换动画
 * @description 功能
 * - 页面路由拆分
 * - ant 全局配置
 * - 页面加载动画
 * - 页面统一的最外层布局样式
 */
const PageRoute = memo(() => {
  const styles = {
    // 页面根样式
    root: css`
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    `,
    // 加载状态样式
    loading: css`
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
    `
  };

  // 页面切割
  const Home = lazy(() => import("../pages/Home"));
  const Applet = lazy(() => import("../pages/applet/Applet"));
  const Error404 = lazy(() => import("../pages/Error404"));

  return (
    <Suspense fallback={<Spin css={styles.loading} delay={300} />}>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/applet" component={Applet} />
        <Route component={Error404} />
      </Switch>
    </Suspense>
  );
});

export default PageRoute;