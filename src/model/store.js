import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applet } from "./applet";
// reducer 拆分
const reducer = combineReducers({
    applet
});
// 导出 store
export const store = createStore(reducer, composeWithDevTools());
//# sourceMappingURL=store.js.map