import produce from "immer";
import { AppletStateFace } from "../types";

const stateDefault: AppletStateFace = {
  theme: "#3A82F8",
  navigation: {
    1: { pageKey: undefined, link: { type: undefined, data: undefined } }
  },
  pages: {
    1: {
      title: undefined,
      icon: undefined,
      uiList: []
    }
  },
  ui: {},
  uiStyle: {},
  drawer: false,
  drawerType: undefined,
  pageKey: "1",
  dragKey: undefined,
  uiKey: undefined
};

const appletStore = (state = stateDefault, action: { type; payload }) =>
  produce(state, draft => {
    const { payload, type } = action;
    switch (type) {
      case AppletAction.addPage:
        draft.pages[payload] = {
          title: "新页面",
          icon: "aplipay",
          uiList: []
        };
        break;
      case AppletAction.delPage:
        delete draft.pages[payload];
        break;
      case AppletAction.setPageInTitle:
        draft.pages[payload.pageKey].title = payload.title;
        break;
      case AppletAction.setPageInUIList:
        draft.pages[draft.pageKey].uiList.push(payload);
        break;
      case AppletAction.movePageInUIListUp:
        [
          draft.pages[draft.pageKey].uiList[payload],
          draft.pages[draft.pageKey].uiList[payload - 1]
        ] = [
          draft.pages[draft.pageKey].uiList[payload - 1],
          draft.pages[draft.pageKey].uiList[payload]
        ];
        break;
      case AppletAction.movePageInUIListDown:
        [
          draft.pages[draft.pageKey].uiList[payload],
          draft.pages[draft.pageKey].uiList[payload + 1]
        ] = [
          draft.pages[draft.pageKey].uiList[payload + 1],
          draft.pages[draft.pageKey].uiList[payload]
        ];
        break;
      case AppletAction.delPageInUIList:
        draft.pages[draft.pageKey].uiList.splice(payload, 1);
        break;

      case AppletAction.addUi:
        draft.ui[payload.uiKey] = payload.data;
        break;
      case AppletAction.delUi:
        delete draft.ui[payload];
        break;
      case AppletAction.setUi:
        draft.ui[draft.uiKey] = {
          ...draft.ui[draft.uiKey],
          ...payload.data
        };
        break;
      case AppletAction.setUiDrag:
        draft.ui[draft.uiKey].uiList.push(payload);
        break;
      case AppletAction.delUiDrag:
        draft.ui[draft.uiKey].uiList.splice(payload, 1);
        break;

      case AppletAction.addUiStyle:
        draft.uiStyle[payload] = {
          marginTop: 0,
          marginBottom: 0,
          paddingTop: 0,
          paddingBottom: 0,
          height: 80,
          bgColor: "",
          bgImg: "",
          paddingLeft: 0,
          paddingRight: 0
        };
        break;
      case AppletAction.delUiStyle:
        delete draft.uiStyle[payload];
        break;
      case AppletAction.setUiStyle:
        draft.uiStyle[draft.uiKey] = {
          ...draft.uiStyle[draft.uiKey],
          ...payload.data
        };
        break;
      case AppletAction.setTheme:
        draft.theme = payload;
        break;
      case AppletAction.setPageKey:
        draft.pageKey = payload;
        break;
      case AppletAction.setUIKey:
        draft.uiKey = payload;
        break;
      case AppletAction.setDrawerType:
        draft.drawerType = payload;
        break;
      case AppletAction.setDrawer:
        draft.drawer = payload;
        break;
      case AppletAction.setDragKey:
        draft.dragKey = payload;
        break;
      default:
        return state;
    }
  });

export enum AppletAction {
  addPage = "APPLET_ADD_PAGE", // 增加页面
  delPage = "APPLET_DEL_PAGE", // 删除页面
  delPageInUIList = "APPLET_DEL_PAGE_UI_LIST", // 删除list中的ui
  setPageInTitle = "APPLET_DEL_PAGE_IN_TITLE", // 修改页面标题
  setPageInUIList = "APPLET_DEL_PAGE_IN_UI_LIST", // 修改页面ui列表
  movePageInUIListUp = "APPLET_MOVE_UI_UP", // ui组件位置上移
  movePageInUIListDown = "APPLET_MOVE_UI_DOWN", // ui组件位置下移

  addUi = "APPLET_ADD_UI", // ui中增加ui
  delUi = "APPLET_DEL_UI", // ui中删除ui
  setUi = "APPLET_SET_UI", // ui中属性变更
  setUiDrag = "APPLET_SET_UI_DRAG", // ui中drag组件添加数据
  delUiDrag = "APPLET_DEL_UI_DRAG", // 删除ui中drag组件内的衍生数据

  addUiStyle = "APPLET_ADD_UI_STYLE", // uiStyle中增加 style
  delUiStyle = "APPLET_DEL_UI_STYLE", // uiStyle 中删除 style
  setUiStyle = "APPLET_SET_UI_STYLE", // uiStyle 数据修改

  setTheme = "APPLET_SET_THEME", // 修改主题色
  setPageKey = "APPLET_SET_PAGE_KEY", // 修改当前编辑的页面id
  setUIKey = "APPLET_SET_UI_KEY", // 修改当前编辑的组件id
  setDrawerType = "APPLET_SET_DRAWER_TYPE", // 修改当前编辑的组件名称）
  setDrawer = "APPLET_SET_DRAWER", // 修改编辑抽屉是否显示
  setDragKey = "APPLET_SET_DRAG_KEY" // 修改编辑drag的下标
}

export { appletStore };
