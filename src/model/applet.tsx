/**
 * @date 2019年04月03日10:23:16
 * @author 陈迎（antonin.chenying@gmail.com）
 * @description applet 数据商店
 */

/**
 * @description 第三方包引用
 */
import produce from "immer";

/**
 * @description 项目文件引用
 */
import { IAction, IAppletState } from "../typing/redux";

/**
 * @description 默认数据源
 */
const stateDefault: IAppletState = {
  // 需要ajax 同步信息
  theme: "#3f51b5",
  nav: [
    {
      pageId: "exname1",
      title: "标题一",
      icon: "alipay"
    },
    {
      pageId: "exname2",
      title: "标题二",
      icon: "wechat"
    },
    {
      pageId: "exname3",
      title: "标题三",
      icon: "yuque"
    }
  ],
  pages: {
    exname1: {
      title: "标题一",
      ui: [],
      plug: {
        service: {
          use: false,
          phone: ""
        },
        share: {
          use: false,
          title: "",
          desc: "",
          img: ""
        }
      }
    },
    exname2: {
      title: "标题二",
      ui: [],
      plug: {
        service: {
          use: false,
          phone: ""
        },
        share: {
          use: false,
          title: "",
          desc: "",
          img: ""
        }
      }
    },
    exname3: {
      title: "标题三",
      ui: [],
      plug: {
        service: {
          use: false,
          phone: ""
        },
        share: {
          use: false,
          title: "",
          desc: "",
          img: ""
        }
      }
    }
  },

  // 本地
  side: "model",
  pageId: "exname1",
  uIndex: 0,
  editType: "theme"
};

/**
 * @description applet reducer 数据逻辑变更处理
 */
export const applet = (state = stateDefault, action: IAction) =>
  produce(state, draft => {
    switch (action.type) {
      // 导航栏数据变更
      case "navChange":
        draft.nav = action.payload.data;
        break;
      //  向ui字段中添加数据
      case "uiAdd":
        // 流程： 数据添加至ui-> 修改当前操作类型 -> 更新当前操作的ui下标
        draft.pages[draft.pageId].ui.push(action.payload.data);
        draft.editType = action.payload.type;
        draft.uIndex = draft.pages[draft.pageId].ui.length - 1;
        break;
      //  主题色更改
      case "themeChange":
        draft.theme = action.payload.data;
        break;
      // 侧边栏项目选择
      case "sideChange":
        draft.side = action.payload.data;
        break;
      default:
        return state;
    }
  });
