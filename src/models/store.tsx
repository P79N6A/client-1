import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rxReducer from "./reducer";

const store = createStore(rxReducer, composeWithDevTools());

export default store;
