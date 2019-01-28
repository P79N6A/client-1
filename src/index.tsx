import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./App";
import rxStore from "./redux/store";

// 程序入口
ReactDOM.render(
  <Provider store={rxStore}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
