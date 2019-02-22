import * as React from "react";
import { Spin } from "antd";
import { css } from "@emotion/core";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import client from "../store/ApolloClient";
import getUserMsg from "../api/userMsg";
import changeUserMsgApi from "../api/changeUserMsg";

export default React.memo(() => {
  // 鉴权
  React.useEffect(() => {
    client
      .query({
        query: getUserMsg
      })
      .then(result => console.log(result));

    client
      .mutate({
        variables: { name: "hello" },
        mutation: changeUserMsgApi
      })
      .then(result => console.log(result));
  }, []);
  // 样式
  const style = css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  `;
  // 管理页面
  const Admin = React.lazy(() => import("../page/admin/Admin"));

  return (
    <BrowserRouter>
      <React.Suspense fallback={<Spin delay={300} size="large" css={style} />}>
        <Switch>
          <Route exact={true} path="/" component={() => <Admin />} />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
});
