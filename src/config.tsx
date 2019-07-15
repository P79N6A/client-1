import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createUploadLink } from "apollo-upload-client";
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { config } from "./model/store/config";
import { user } from "./model/store/user";
import { appletStore } from "./page/applet/model/store";

/**
 * @description Apollo 客户端配置
 */
export const apollo = new ApolloClient({
  cache: new InMemoryCache(),
  link: createUploadLink({
    uri: "http://localhost:8888/graphql"
  })
});

/**
 * @description  Redux 数据源配置
 */
export const redux = createStore(
  combineReducers({
    // 配置
    config,
    // 用户数据
    user,
    // TODO 后期调整为 applet
    appletStore
  }),
  // TODO 开发环境下,删除 composeWithDevTools
  composeWithDevTools()
);
