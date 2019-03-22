import produce from "immer";
import { IApplets } from "../../../typing/model/model";
import { $$nav } from "../package/nav/database";

const stateDefault: IApplets = {
  // 当前需要操作的组件 id
  edit_id: "theme",
  // 导航栏数据
  nav: ["1", "2", "3"],
  // ui数据集
  ui: {
    "1": {
      icon: "add",
      title: "测试1",
      desc:'',
      ui: []
    },
    "2": {
      icon: "add",
      title: "测试1",
      desc:'',
      ui: []
    },
    "3": {
      icon: "add",
      title: "测试1",
      desc:'',
      ui: []
    }
  },
  // 当前显示的ui下标
  ui_id: "1"
};

export const applets = (state = stateDefault, action: any) =>
  produce(state, draft => {
    const { type, payload } = action;
    switch (type) {
      default:
        return state;
    }
  });
