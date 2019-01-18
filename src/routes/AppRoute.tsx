import React, { lazy, memo, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Spin } from "antd";

// loading 样式
const Load = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
const Loading = () => {
  return (
    <Load>
      <Spin delay={300} size="large" tip="拼命加载中..." />
    </Load>
  );
};

export default memo(() => {
  // 管理页面
  const Admin = lazy(() => import("../layout/admin/AdminLayout"));
  return (
    <BrowserRouter>
      <Switch>
        <Suspense fallback={<Loading />}>
          <Route path="/" exact={true} component={Admin} />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
});
