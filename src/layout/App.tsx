import React, { Suspense } from "react";
import { Spin } from "antd";
import { css } from "@emotion/core";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { IStore } from "../model/store";
import NetErrorBoundary from "../components/NetErrorBoundary";

// 根组件
export default () => {
  // 路由
  const routes = useSelector((state: IStore) => state.config.routes);

  return (
    <NetErrorBoundary>
      <Suspense
        fallback={
          <Spin
            css={css`
              margin: 40vh auto;
            `}
            delay={300}
            tip={"拼命加载中..."}
          />
        }
      >
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              // @ts-ignore
              render={() => <route.component {...route} />}
            />
          ))}
        </Switch>
      </Suspense>
    </NetErrorBoundary>
  );
};
