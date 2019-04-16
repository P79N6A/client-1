import { css } from "@emotion/core";
import { ConfigProvider, Empty, Layout, LocaleProvider, Spin } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import React, { memo, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/**
 * @description 功能
 * - 页面路由拆分
 * - 防止页面加载失败的错误处理
 * - 页面加载动画
 * - 页面统一的最外层布局样式
 */
const App = memo(() => {
  // 样式
  const styles = {
    loading: css`
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
    `,
    root: css`
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    `
  };

  // antd 全局配置配置 -> 空状态
  const customizeEmpty = () => <Empty description={"暂无数据"} />;

  // 页面代码切割
  const Admin = React.lazy(() => import("./page/Admin"));
  const Home = React.lazy(() => import("./page/Home"));
  const Applet = React.lazy(() => import("./page/applet/Applet"));
  const AppletAdmin = React.lazy(() => import("./page/AppletAdmin"));

  return (
    <ConfigProvider renderEmpty={customizeEmpty}>
      <LocaleProvider locale={zh_CN}>
        <Layout css={styles.root}>
          <BrowserRouter>
            <Suspense fallback={<Spin css={styles.loading} delay={300} />}>
              <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/admin" component={Admin} />
                <Route path="/applet" component={Applet} />
                <Route path="/applet-admin" component={AppletAdmin} />
              </Switch>
            </Suspense>
          </BrowserRouter>
        </Layout>
      </LocaleProvider>
    </ConfigProvider>
  );
});

export default App;
