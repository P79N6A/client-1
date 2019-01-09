import React, { lazy, memo, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { css, StyleSheet } from "aphrodite/no-important";
import { Spin } from "antd";

// loading 样式
const Loading = () => {
  const styles = StyleSheet.create({
    // loading动画居中
    center: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100vw",
      height: "100vh"
    }
  });

  return (
    <div className={css(styles.center)}>
      <Spin delay={300} size="large" tip="拼命加载中..."/>
    </div>
  );
};

export default memo(() => {
  // 管理页面
  const Admin = lazy(() => import("../layout/admin/AdminLayout"));
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<Loading/>}>
          <Route path="/" exact={true} component={Admin}/>
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
});
