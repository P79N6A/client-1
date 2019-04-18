import React, { memo, Suspense, lazy } from "react";
import { css } from "@emotion/core";
import { Layout, LocaleProvider, Spin } from "antd";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import zh_CN from "antd/lib/locale-provider/zh_CN";

/**
 * @description 功能
 * - 页面路由拆分
 * - ant 全局配置
 * - 页面加载动画
 * - 页面统一的最外层布局样式
 */
const App = memo(() => {
  // 样式
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

  /**
   * @description 页面切割
   * @param Home 首页
   * @param Login 登录页
   * @param Register  注册页
   * @param Admin 用户后台管理
   * @param AppletMade 小程序制作页
   * @param AppletAdmin 小程序内容管理
   */
  const Home = lazy(() => import("./page/Home"));
  const Login = lazy(() => import("./page/Login"));
  const Register = lazy(() => import("./page/Register"));
  const Admin = lazy(() => import("./page/Admin"));
  const AppletMade = lazy(() => import("./page/AppletMade"));
  const AppletAdmin = lazy(() => import("./page/AppletAdmin"));
  const Help = lazy(() => import("./page/Help"));
  const Vip = lazy(() => import("./page/Vip"));
  return (
    <LocaleProvider locale={zh_CN}>
      <Layout css={styles.root}>
        <BrowserRouter>
          <Suspense fallback={<Spin css={styles.loading} delay={300} />}>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/admin" component={Admin} />
              <Route path="/applet" component={AppletMade} />
              <Route path="/applet-admin" component={AppletAdmin} />
              <Route path="/help" component={Help} />
              <Route path="/vip" component={Vip} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </Layout>
    </LocaleProvider>
  );
});

export default App;
