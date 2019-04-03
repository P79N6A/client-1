/**
 * @date 2019年04月03日10:23:16
 * @author 陈迎（antonin.chenying@gmail.com）
 * @description 项目程序入口
 */

/**
 * @description 第三方包引用
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./model/store"; // 状态管理
import App from "./routes/App"; // 根组件

/**
 * @description 将应用程序渲染至 id 为 root 的 div 下
 */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
