import produce from "immer";

/**
 * ⚡️ 此文件将频繁使用
 *  @description store 数据处理中心
 *  中心数据为不可变数据结构
 *  使用框架参考：https://github.com/mweststrate/immer
 */
interface IRxReducer {
  admin: {
    siderSelect: string;
  };
}

// 初始化数据
const state = {
  // admin 界面涉及数据
  admin: {
    siderSelect: ""
  }
};
// 数据处理中心，（不可变数据结构）
const rxReducer = produce(
  (draft = state, action): IRxReducer => {
    switch (action.type) {
      case "ADMIN_SIDER_SELECT":
        draft.admin.siderSelect = action.payload;
        return draft;
      default:
        return draft;
    }
  }
);

export {
  // 函数
  rxReducer,
  // 接口
  IRxReducer
};
