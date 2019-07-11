import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { userStore } from "./userStore";
import { appletStore } from "../page/applet/model/store";

const reducer = combineReducers({
  appletStore,
  user: userStore
});

export const store = createStore(reducer, composeWithDevTools());
