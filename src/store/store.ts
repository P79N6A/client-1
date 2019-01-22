import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rxReducer from "./reducer";

const rxStore = createStore(rxReducer, composeWithDevTools());

export default rxStore;