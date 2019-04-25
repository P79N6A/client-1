import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { appletStore } from "../pages/applet/model/store";

const reducer = combineReducers({
  // 小程序页
  applet: appletStore
});

export const store = createStore(reducer, composeWithDevTools());
