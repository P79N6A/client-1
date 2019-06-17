import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Layout, Spin } from "antd";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { css } from "@emotion/core";
import { size } from "polished";

import { store } from "./models/store";
import * as serviceWorker from "./serviceWorker";

// 页面拆分
const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/user/Register"));
const Login = lazy(() => import("./pages/user/Login"));
const RePassword = lazy(() => import("./pages/user/RePassword"));
const Error403 = lazy(() => import("./pages/error/Error403"));
const Error404 = lazy(() => import("./pages/error/Error404"));
const Admin = lazy(() => import("./pages/admin/Admin"));
// 根组件
const App: React.FC = () => {
  const styles = {
    // 页面根样式
    layout: css`
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
    <Layout css={styles.layout}>
      <Suspense fallback={loading}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/Admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Route path="/re-password" component={RePassword} />
          <Route path="/403" component={Error403} />
          <Route component={Error404} />
        </Switch>
      </Suspense>
    </Layout>
  );
};

// 组件渲染
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// 脱机服务 参考链接：https://bit.ly/CRA-PWA
serviceWorker.register();
