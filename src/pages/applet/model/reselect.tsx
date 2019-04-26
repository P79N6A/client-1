import { createSelector } from "reselect";

const theme = state => state.applet.theme;
const pageIndex = state => state.applet.pageIndex;
const pages = state => state.applet.pages;
const components = state => state.applet.components;
const componentStyle = state => state.applet.componentStyle;
const componentIndex = state => state.applet.componentIndex;
const drawer = state => state.applet.drawer;
const drawerType = state => state.applet.drawerType;
const dragIndex = state => state.applet.dragIndex;
const tabBar = state => state.applet.tabBar;

// 页面数据
export const appletEditStore = createSelector(
  [theme, pageIndex, pages],
  (theme, pageIndex, pages) => {
    return { theme, pageIndex, pages };
  }
);

export const appletCanvasStore = createSelector(
  [theme, pageIndex, pages, components, componentStyle, componentIndex],
  (theme, pageIndex, pages) => {
    return {
      // 主题色
      theme,
      // 页面组件列表
      uiList: pageIndex !== undefined ? pages[pageIndex].uiList : [],
      // 页面标题
      title: pageIndex !== undefined ? pages[pageIndex].title : []
    };
  }
);

export const appletMadeCanvasStore = createSelector(
  [theme, pageIndex, pages, components, componentStyle, componentIndex],
  (theme, pageIndex, pages, components, componentStyle, componentIndex) => {
    return {
      theme,
      uiList: pageIndex !== undefined ? pages[pageIndex].uiList : [],
      components,
      componentStyle,
      componentIndex
    };
  }
);

export const AppletMadeEditStore = createSelector(
  [drawer, drawerType],
  (drawer, drawerType) => {
    return { drawer, drawerType };
  }
);

// 组件数据
export const UIEditStore = createSelector(
  [components, componentIndex, theme, dragIndex],
  (components, componentIndex, theme, dragIndex) => {
    return { components, componentIndex, theme, dragIndex };
  }
);

export const UIStyleEditStore = createSelector(
  [componentStyle, componentIndex, theme],
  (componentStyle, componentIndex, theme) => {
    return { componentStyle, componentIndex, theme };
  }
);

export const DragStore = createSelector(
  [components, dragIndex],
  (components, dragIndex) => {
    return { componentStyle, components, dragIndex };
  }
);

export const TabBarUIStore = createSelector(
  [pageIndex, theme, tabBar, pages],
  (pageIndex, theme, tabBar, pages) => {
    return { pageIndex, theme, tabBar, pages };
  }
);
