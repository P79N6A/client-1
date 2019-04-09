/**
 * @date 2019年04月03日10:23:16
 * @author 陈迎（antonin.chenying@gmail.com）
 * @description 项目程序入口
 */

/**
 * @description 第三方包引用
 */
import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

/**
 * @description 应用程序包引用
 */
import { client } from "./service/configure"; // 状态管理
import App from "./App"; // 根组件
import { store } from "./store/store";

/**
 * @description 将应用程序渲染至 id 为 root 的 div 下
 */
ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById("root")
);
