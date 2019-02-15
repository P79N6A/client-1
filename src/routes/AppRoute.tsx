/** @jsx jsx */
import { lazy, memo, Suspense } from "react";
import { Spin } from "antd";
import { jsx, css } from "@emotion/core";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

/**
 * @description 页面路由组件
 * 功能
 * 1. 页面加载动画 ✅
 * 2. 页面路由拆分 ✅
 * 页面及相对名称：
 * admin   用户管理界面 ✅
 */
export default memo(() => {
  // 样式
  const style = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  `;
  // 管理页面
  const Admin = lazy(() => import("../page/admin/Admin"));

  return (
    <BrowserRouter>
      <Suspense fallback={<Spin delay={300} size="large" css={style} />}>
        <Switch>
          <Route exact path="/" component={() => <Admin />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
});
