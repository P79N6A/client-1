/**
 * 🔒 文件请勿修改，此为固定函数
 */
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rxReducer } from "./reducer";

/**
 * @description redux 工具集成，创建唯一store
 */
// @ts-ignore
const rxStore = createStore(rxReducer, composeWithDevTools());

export default rxStore;
