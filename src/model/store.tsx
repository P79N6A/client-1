import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { IUserStore, user } from "./store/user";
import { config, IConfigStore } from "./store/config";
import { appletStore } from "../page/applet/model/store";

const reducer = combineReducers({
  // 配置
  config,
  // 用户数据
  user,
  // TODO 后期调整为 applet
  appletStore
});

export interface IStore {
  config: IConfigStore;
  user: IUserStore;
}

/**
 * TODO 开发环境下,删除 composeWithDevTools
 */
export const store = createStore(reducer, composeWithDevTools());
