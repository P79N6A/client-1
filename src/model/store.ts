/**
 * @date 2019年04月03日10:23:16
 * @author 陈迎（antonin.chenying@gmail.com）
 * @description 程序状态管理
 */

/**
 * @description 第三方包引用
 */
import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

/**
 * @description 项目文件引用
 */
import { applet } from "./applet"; // 小程序 数据商店

/**
 * @description reducer 拆分
 */
const reducer = combineReducers({
  // 小程序页面
  applet
});

/**
 * @description 导出 store，也可在此处引用中间件
 */
export const store = createStore(reducer, composeWithDevTools());
