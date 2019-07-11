import produce from "immer";
import { IAction } from "../../../store/action";

/**
 * appletStore 默认数据源
 */
export interface IAppletStore {
  theme: string;
  navList: Array<{
    type: string; //导航栏链接类型
    data: string; // 链接类型附带的数据
  }>;
  pageList: {
    [pageId: string]: {
      title: string; // 标题
      icon: string; // 图标
    };
  };

  pages: {
    [pageId: string]: Array<{
      component: {};
      style: {};
      form: {};
    }>;
  };

  drawer: boolean;
  drawerType: undefined | string;
  pageId: string | undefined;
  componentId: number | undefined;
  dragId: number | undefined;
}
const state: IAppletStore = {
  theme: "#3A82F8",
  navList: [],
  pageList: {},
  pages: {},

  // 页面组件UI默认值
  drawer: false, // 控制组件编辑器的显示
  drawerType: undefined, // 控制抽屉当前显示的组件类型
  pageId: undefined, // 当前正在编辑的页面id
  componentId: undefined, // 当前编辑的ui下标
  dragId: undefined // 拖拽组件当前操作的组件下标
};

/**
 * reducer 操作
 */
export const appletStore = produce((draft = state, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    /**
     * 修改主题色
     */
    case "APPLET_THEME_SET":
      draft.theme = payload;
      break;

    /**
     * 页面标题修改 -> pageList
     * @param pageId
     * @param newTitle
     */
    case "APPLET_PAGE_TITLE_SET":
      draft.pageList[payload.pageId].title = payload.newTitle;
      break;
    /**
     * 新增页面
     */
    case "APPLET_PAGE_ADD":
      draft.pageList[payload] = {
        title: "新建页面",
        icon: "home"
      };
      draft.pages[payload] = [];
      draft.pageId = payload;
      break;
    /**
     * 删除页面
     */
    case "APPLET_PAGE_REMOVE":
      payload.map((data: string) => {
        delete draft.pageList[data];
        delete draft.pages[data];
        return null;
      });
      break;
    /**
     * pageList位置移动
     */
    case "APPLET_PAGE_LIST_MOVE":
      const newPageList: any = {};
      // 将移动的数据进行重新排序
      Object.keys(draft.pageList).map(data => {
        if (data !== payload.dragId) {
          newPageList[data] = draft.pageList[data];
        }
        if (data === payload.dropId) {
          newPageList[data] = draft.pageList[data];
          newPageList[payload.dragId] = draft.pageList[payload.dragId];
        }
        return null;
      });
      draft.pageList = newPageList;
      break;

    /**
     * 向pages -> component 添加组件
     */
    case "APPLET_COMPONENT_ADD":
      draft.pages[draft.pageId].push(payload);
      draft.componentId = draft.pages[draft.pageId].length - 1;
      draft.drawerType = payload.component.type;
      break;
    /**
     * 组件上移动
     */
    case "APPLET_COMPONENT_MOVE_UP":
      [
        draft.pages[draft.pageId][payload],
        draft.pages[draft.pageId][payload - 1]
      ] = [
        draft.pages[draft.pageId][payload - 1],
        draft.pages[draft.pageId][payload]
      ];
      draft.componentId -= 1;
      break;
    /**
     * 组件下移动
     */
    case "APPLET_COMPONENT_MOVE_DOWN":
      [
        draft.pages[draft.pageId][payload],
        draft.pages[draft.pageId][payload + 1]
      ] = [
        draft.pages[draft.pageId][payload + 1],
        draft.pages[draft.pageId][payload]
      ];
      draft.componentId += 1;
      break;
    /**
     * 组件删除
     */
    case "APPLET_COMPONENT_REMOVE":
      draft.pages[draft.pageId].splice(0, 1);
      break;
    /**
     * 组件数据修改
     */
    case "APPLET_COMPONENT_SET":
      draft.pages[draft.pageId][draft.componentId].component = {
        ...draft.pages[draft.pageId][draft.componentId].component,
        ...payload
      };
      break;
    /**
     * 组件样式数据修改
     */
    case "APPLET_COMPONENT_STYLE_SET":
      draft.pages[draft.pageId][draft.componentId].style = {
        ...draft.pages[draft.pageId][draft.componentId].style,
        ...payload
      };
      break;
    /**
     * 修改移动组件内的位置大小重置
     */
    case "APPLET_COMPONENT_DRAG_RESIZE":
      draft.pages[draft.pageId][draft.componentId].component.uiList[
        draft.dragId
      ] = {
        ...draft.pages[draft.pageId][draft.componentId].component.uiList[
          draft.dragId
        ],
        ...payload
      };
      break;
    /**
     * 删除移动组件
     */
    case "APPLET_DRAG_REMOVE":
      draft.pages[draft.pageId][draft.componentId].component.uiList.splice(
        payload,
        1
      );
      draft.dragId = undefined;
      break;

    /**
     * 修改pageId字段
     */
    case "APPLET_PAGE_ID_SET":
      draft.pageId = payload;
      break;
    /**
     * 修改componentId字段
     */
    case "APPLET_COMPONENT_ID_SET":
      draft.componentId = payload;
      draft.drawerType = draft.pages[draft.pageId][payload].component.type;
      break;
    /**
     * 修改componentId字段重置
     */
    case "APPLET_COMPONENT_ID_RESET":
      draft.componentId = undefined;
      draft.drawerType = undefined;
      break;
    /**
     * 修改dragId字段
     */
    case "APPLET_DRAG_ID_SET":
      draft.dragId = payload;
      break;
    /**
     * 修改drawerType
     */
    case "APPLET_DRAWER_TYPE_SET":
      draft.drawerType = payload;
      break;
    default:
      return draft;
  }
});
