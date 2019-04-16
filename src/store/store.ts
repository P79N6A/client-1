import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applet } from "./renducer/applet";

const reducer = combineReducers({
  // 小程序页面
  applet
});

export const store = createStore(reducer, composeWithDevTools());
