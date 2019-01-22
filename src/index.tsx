import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routes/AppRouter";
import rxStore from "./store/store";

// 程序入口
ReactDOM.render(
  <Provider store={rxStore}>
    <AppRouter />
  </Provider>,
  document.getElementById("root")
);
