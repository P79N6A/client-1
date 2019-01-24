/**
 * ⚡️ 此文件将频繁使用
 */
import produce from "immer";
import { IReducer, IRxReducer } from "../typing/redux";

/**
 * @description 初始化数据中心
 */
const state: IRxReducer = {
  admin: {
    siderSelect: "home"
  }
};

/**
 *  @description store 数据处理中心
 *  中心数据为不可变数据结构
 *  使用框架参考：https://github.com/mweststrate/immer
 */
const rxReducer: IReducer = produce((draft = state, action) => {
  switch (action.type) {
    case "ADMIN_SIDER_SELECT":
      draft.admin.siderSelect = action.payload;
      return draft;
    default:
      return draft;
  }
});

export {
  // 函数
  rxReducer
};
