import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter } from "react-router-dom";
import { store } from "./models/store";
import { client } from "./api/config";
import Layout from "./layouts/Layout";

/**
 * 将根组件渲染至页面 div 中
 * @param <ApolloProvider> 用于graphql请求
 * @param <Provider>  使Redux store数可用于全局
 * @param <BrowserRouter> 路由根组件
 * @param <Layout /> 根组件
 */
ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ApolloProvider>
  </Provider>,
  document.getElementById("root")
);
