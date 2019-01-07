import React, { lazy, memo, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { css, StyleSheet } from "aphrodite";
import { Spin } from "antd";


const Loading = () => {
  const styles = StyleSheet.create({
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
      <Spin delay={300} size="large" tip="拼命加载中..." />
    </div>
  );
};

export default memo(() => {
  const AdminPage = lazy(() => import("../app/Admin"));
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route path="/" exact={true} component={AdminPage} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
});
