/** @jsx jsx
 *  @description 页面
 *  @author 陈迎
 *  功能及完成度
 *  1. 页面切割
 *  2. 错误页面
 * */
import React, { memo, Suspense } from "react";
import { css, jsx } from "@emotion/core";
import { ConfigProvider, Empty, Layout, Spin } from "antd";
import { LinearProgress } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default memo(() => {
  // 样式
  const styles = css`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  `;

  // antd 全局配置配置 ->空状态
  const customizeRenderEmpty = () => <Empty description={"暂无数据"} />;

  // 页面代码切割
  const Admin = React.lazy(() => import("../page/Admin"));
  const Home = React.lazy(() => import("../page/Home"));
  const Applet = React.lazy(() => import("../page/applet/Applet"));
  const AppletAdmin = React.lazy(() => import("../page/AppletAdmin"));

  return (
    <Layout css={styles}>
      <ConfigProvider renderEmpty={customizeRenderEmpty}>
        <BrowserRouter>
          <Suspense
            fallback={<Spin indicator={<LinearProgress />} delay={300} />}
          >
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/admin" component={Admin} />
              <Route path="/applet" component={Applet} />
              <Route path="/applet-admin" component={AppletAdmin} />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </ConfigProvider>
    </Layout>
  );
});
