import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";

import App from "./App";
import { store } from "./store/store";
import { ApolloClientConfig } from "./service/config";

/**
 * 将根组件渲染至页面 div 中
 * @param <ApolloProvider> 用于graphql请求
 * @param <Provider>  使Redux store数可用于全局
 * @param <App /> 根组件
 */
ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={ApolloClientConfig}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
