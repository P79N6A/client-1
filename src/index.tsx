import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import App from "./layout/App";
import { register } from "./serviceWorker";
import { apollo, redux } from "./config";

/**
 * @description 添加第三方库根组件
 * 1. BrowserRouter   路由
 * 2. Provider   状态商店
 * 3. ApolloProvidert   graphql 客户端
 */
ReactDOM.render(
  <Provider store={redux}>
    <ApolloProvider client={apollo}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);

register();
