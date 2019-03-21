import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Layout from "./layout/Layout";
import { store } from "./model/redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("root")
);

/**
 * TODO
 * if you are using a production environment ,be sure
 * to remove these codes
 */

// hmr
// @ts-ignore
if (module.hot) {
  // @ts-ignore
  module.hot.accept();
}
// mock
