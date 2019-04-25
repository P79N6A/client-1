import produce from "immer";
import { AppletStateFace } from "../types";

// action 列表
const appletAction = {
  // theme 主题色
  themeSet: "APPLET_THEME_SET", // 编辑主题色

  // pages 页面
  pageAdd: "APPLET_PAGE_ADD", // 创建页面
  pageSet: "APPLET_PAGE_SET", // 设置页面数据
  pageRemove: "APPLET_PAGE_REMOVE", // 销毁页面

  // component 组件 （index 与 component style 一致）
  componentsAdd: "APPLET_COMPONENTS_ADD", // 创建组件
  componentsSet: "APPLET_COMPONENTS_SET", // 设置组件数据
  componentsRemove: "APPLET_COMPONENTS_REMOVE", // 销毁组件

  // component style 组件样式 （index 与 component 一致）
  componentStyleAdd: "APPLET_COMPONENT_STYLE_ADD", // 创建组件样式
  componentStyleSet: "APPLET_COMPONENT_STYLE_SET", // 设置组件样式数据
  componentStyleRemove: "APPLET_COMPONENT_STYLE_REMOVE", // 销毁组件样式

  // drawer 编辑抽屉
  drawerSet: "APPLET_DRAWER_SET", // 控制 编辑抽屉 是否显示

  // drawerType 编辑抽屉当前显示编辑组件的类型
  drawerTypeSet: "APPLET_DRAWER_TYPE_SET", // 控制 编辑抽屉 组件的类型

  // page index 页面下标
  pageIndexSet: "APPLET_PAGE_INDEX_SET", // 当前操作的页面下标

  // component index 组件/组件样式 下标
  componentIndexSet: "APPLET_COMPONENT_INDEX_SET" // 控制 编辑抽屉 是否显示
};

// store 默认数据
const stateDefault: AppletStateFace = {
  theme: "#3A82F8",
  navigations: {},
  pages: {},
  components: {},
  componentStyle: {},
  drawer: false,
  drawerType: undefined,
  pageIndex: undefined,
  componentIndex: undefined
};

// applet redux 数据集合
const appletStore = (state = stateDefault, action: { type; payload }) =>
  produce(state, draft => {
    const { payload, type } = action;
    switch (type) {
      case appletAction.themeSet:
        draft.theme = payload.theme;
        break;

      case appletAction.pageAdd:
        draft.pages[payload.pageIndex] = {
          title: "新页面",
          icon: "aplipay",
          uiList: []
        };
        break;
      case appletAction.pageRemove:
        delete draft.pages[payload.pageIndex];
        break;
      case appletAction.pageSet:
        switch (payload.setType) {
          // 编辑标题
          case "title":
            draft.pages[payload.pageIndex].title = payload.title;
            break;
          //  uiList 中新增组件(component 下标)
          case "uiList":
            draft.pages[draft.pageIndex].uiList.push(payload.componentIndex);
            break;
          //  uiList 组件中的 component 指定下标上移
          case "uiListItemUp":
            [
              draft.pages[draft.pageIndex].uiList[payload.uiListIndex],
              draft.pages[draft.pageIndex].uiList[payload.uiListIndex - 1]
            ] = [
              draft.pages[draft.pageIndex].uiList[payload.uiListIndex - 1],
              draft.pages[draft.pageIndex].uiList[payload.uiListIndex]
            ];
            break;
          //  uiList 组件中的 component 指定下标下移
          case "uiListItemDown":
            [
              draft.pages[draft.pageIndex].uiList[payload.uiListIndex],
              draft.pages[draft.pageIndex].uiList[payload.uiListIndex + 1]
            ] = [
              draft.pages[draft.pageIndex].uiList[payload.uiListIndex + 1],
              draft.pages[draft.pageIndex].uiList[payload.uiListIndex]
            ];
            break;
          //  uiList 组件中的 component 指定下标删除
          case "uiListItemRemove":
            draft.pages[draft.pageIndex].uiList.splice(payload.uiListIndex, 1);
            break;
        }
        break;

      case appletAction.componentsAdd:
        draft.components[payload.componentIndex] = payload.componentData;
        break;
      case appletAction.componentsRemove:
        delete draft.components[payload.componentIndex];
        break;
      case appletAction.componentsSet:
        switch (payload.setType) {
          // 针对一般的组件,进行常规的数据替换
          case "common":
            draft.components[draft.componentIndex] = {
              ...draft.components[draft.componentIndex],
              ...payload.componentData
            };
            break;
          //  向drag组件中添加 可拖拽的组价数据
          case "dragAddComponent":
            draft.components[draft.componentIndex].uiList.push(
              payload.componentIndex
            );
            break;
          //  向drag组件中删除 可拖拽的组价数据
          case "dragRemoveComponent":
            draft.components[draft.componentIndex].uiList.splice(
              payload.dragUIListIndex,
              1
            );
            break;
        }
        break;

      case appletAction.componentStyleAdd:
        draft.componentStyle[payload.componentStyleIndex] = {
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
      case appletAction.componentStyleRemove:
        delete draft.componentStyle[payload.componentStyleIndex];
        break;
      case appletAction.componentStyleSet:
        draft.componentStyle[draft.componentIndex] = {
          ...draft.componentStyle[draft.componentIndex],
          ...payload.componentStyleData
        };
        break;

      case appletAction.componentIndexSet:
        draft.componentIndex = payload.componentIndex;
        break;

      case appletAction.pageIndexSet:
        draft.pageIndex = payload.pageIndex;
        break;

      case appletAction.drawerTypeSet:
        draft.drawerType = payload.drawerType;
        break;

      case appletAction.drawerSet:
        draft.drawer = payload.drawer;
        break;

      default:
        return state;
    }
  });

export { appletStore, appletAction };
