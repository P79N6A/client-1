import React, { lazy, Suspense } from "react";
import { Button, Layout, Result, Spin } from "antd";
import { Route, Switch } from "react-router";
import { css } from "@emotion/core";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";
import NetErrorBoundary from "../components/NetErrorBoundary";

// 注册页
const Register = lazy(() => import("../page/register/Register"));
// 登陆
const Login = lazy(() => import("../page/login/Login"));
// admin
const Admin = lazy(() => import("./AdminLayout"));
// 小程序制作业
const Applet = lazy(() => import("../page/applet/Applet"));
// 首页
const Home = lazy(() => import("../page/home/Home"));

// 根组件
export default () => {
  const styles = {
    // 页面根样式
    layout: css`
      width: 100vw;
      height: 100vh;
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
    <Provider store={store}>
      <BrowserRouter>
        <Layout css={styles.layout}>
          <NetErrorBoundary>
            <Suspense fallback={loading}>
              <Switch>
                <Route exact path="/home" component={Home} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/admin" component={Admin} />
                <Route path="/applet" component={Applet} />
                <Route
                  component={() => (
                    <Result
                      status="404"
                      title="404"
                      subTitle="对不起，你访问的页面不存在"
                      extra={<Button type="primary">会到首页</Button>}
                    />
                  )}
                />
              </Switch>
            </Suspense>
          </NetErrorBoundary>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
