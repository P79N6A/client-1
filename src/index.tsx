/**
 * @description 程序入口文件
 * 功能
 * 1. 引入路由根组件 ✅
 * 2. store 商店包裹 ✅
 */
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./App";
import rxStore from "./redux/store";

ReactDOM.render(
  <Provider store={rxStore}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
