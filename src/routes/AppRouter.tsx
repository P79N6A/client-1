import React, { lazy, memo, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Spin } from "antd";
import { LoadStyled } from "./styled";

/**
 * @description 页面路由组件
 * 页面及相对名称：
 * admin   用户管理界面
 */
export default memo(() => {
  // 页面加载动画
  const loading = <LoadStyled>
    <Spin delay={300} size="large" tip="拼命加载中..." />
  </LoadStyled>;
  // 管理页面
  const Admin = lazy(() => import("../layout/admin/AdminLayout"));
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Switch>
          <Route exact={true} path="/" component={Admin} />
          {/*⚠️：用于cdn，重定向到页面，不可去除*/}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
});
