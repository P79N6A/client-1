import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { appletStore } from "../pages/applet/model/store";

const reducer = combineReducers({
  appletStore
});

export const store = createStore(reducer, composeWithDevTools());
