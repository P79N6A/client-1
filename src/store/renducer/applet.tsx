import produce from "immer";
import { IAction, IAppletState } from "../typing";

const stateDefault: IAppletState = {
  // 需要ajax 同步信息
  theme: "#3A82F8",
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
      icon: "alipay",
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
      icon: "alipay",
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
      icon: "alipay",
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
  sider: 0, // 默认 0
  pageId: "exname1",
  uIndex: 0,
  editType: "theme",
  editShow: false,
  dragUse: false, // 控制画布的渲染，当使用自由布局组件时，将UI排序列表关闭
  dragIndex: 0 // 移动的组件下表
};

export const applet = (state = stateDefault, action: IAction) =>
  produce(state, draft => {
    switch (action.type) {
      //  向ui字段中添加数据
      case "uiAdd":
        // 流程： 数据添加至ui-> 修改当前操作类型 -> 更新当前操作的ui下标
        draft.pages[draft.pageId].ui.push(action.payload);
        draft.editType = action.payload.type;
        draft.uIndex = draft.pages[draft.pageId].ui.length - 1;
        // 效果等同于 "changeEditShow"
        draft.editShow = true;
        break;
      //   ui字段中，数据位置交换,拖拽
      case "uiReSite":
        [
          draft.pages[draft.pageId].ui[action.payload[0]],
          draft.pages[draft.pageId].ui[action.payload[1]]
        ] = [
          draft.pages[draft.pageId].ui[action.payload[1]],
          draft.pages[draft.pageId].ui[action.payload[0]]
        ];
        draft.uIndex = action.payload[1];
        break;
      //   删除ui字段中组件
      case "uiDel":
        draft.pages[draft.pageId].ui.splice(action.payload, 1);
        break;

      // 导航栏数据变更
      case "navChange":
        draft.nav = action.payload.data;
        break;
      //  主题色更改
      case "changeTheme":
        draft.theme = action.payload;
        break;

      // 添加页面
      case "addPage":
        draft.pages.add = {
          title: "添加项",
          ui: [],
          icon: "alipay",
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
        };
        break;
      // 侧边栏项目选择
      case "changeSider":
        draft.sider = action.payload;
        break;
      //  更改ui编辑下标
      case "changeUIndex":
        draft.uIndex = action.payload;
        // dragUse 关闭
        draft.dragUse = false;
        break;
      //  更改当前操作页面下标
      case "changePageId":
        draft.pageId = action.payload;
        break;
      //  改变页面标题
      case "changePageTitle":
        draft.pages[action.payload.pageId].title = action.payload.title;
        break;

      //  修改编辑器当前edit显示类型
      case "changeEditType":
        draft.editType = action.payload;
        break;
      //  控制编辑侧边栏是否显示
      case "changeEditShow":
        draft.editShow = action.payload;
        break;

      // 同步所有组件ui 可编辑属性
      case "changeUIValue":
        draft.pages[draft.pageId].ui[draft.uIndex] = {
          ...draft.pages[draft.pageId].ui[draft.uIndex],
          ...action.payload
        };
        break;

      // 自由拖动组件
      case "changePosition":
        draft.pages[draft.pageId].ui[draft.uIndex].uiList[
          draft.dragIndex
        ].left += action.payload.left;
        draft.pages[draft.pageId].ui[draft.uIndex].uiList[
          draft.dragIndex
        ].top += action.payload.top;
        break;
      case "changeSize":
        draft.pages[draft.pageId].ui[draft.uIndex].uiList[
          draft.dragIndex
        ].width = action.payload.width;
        draft.pages[draft.pageId].ui[draft.uIndex].uiList[
          draft.dragIndex
        ].height = action.payload.height;
        draft.pages[draft.pageId].ui[draft.uIndex].uiList[
          draft.dragIndex
        ].left = action.payload.left;
        draft.pages[draft.pageId].ui[draft.uIndex].uiList[draft.dragIndex].top =
          action.payload.top;
        break;

      //  控制当前移动组件下标
      case "setDragIndex":
        draft.dragIndex = action.payload;
        draft.dragUse = true;
        break;

      // 同步drag ui 的数值
      case "changeDragUIValue":
        draft.pages[draft.pageId].ui[draft.uIndex].uiList[draft.dragIndex] = {
          ...draft.pages[draft.pageId].ui[draft.uIndex].uiList[draft.dragIndex],
          ...action.payload
        };
        break;
      default:
        return state;
    }
  });
