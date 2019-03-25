import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Layout from "./layout/Layout";
import { store } from "./model/redux/store";
import { register } from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("root")
);

register();
