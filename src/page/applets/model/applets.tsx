import produce from "immer";
import { IApplets } from "../../../typing/model/model";
import { $$nav } from "../package/nav/database";

const stateDefault: IApplets = {
  // 当前需要操作的组件 id
  edit_id: "theme",
  // 导航栏数据
  nav: $$nav,
  // 侧边栏父级下标
  select: "page",
  // ui数据集
  ui: {
    [$$nav[0].ui_id]: []
  },
  // 当前显示的ui下标
  ui_id: $$nav[0].ui_id
};

export const applets = (state = stateDefault, action: any) =>
  produce(state, draft => {
    const { type, payload } = action;
    switch (type) {
      default:
        return state;
    }
  });
