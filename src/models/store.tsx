import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { appletStore } from "../pages/applet/model/store";
import { userStore } from "./userStore";

const reducer = combineReducers({
  appletStore,
  userStore
});

export const store = createStore(reducer, composeWithDevTools());
