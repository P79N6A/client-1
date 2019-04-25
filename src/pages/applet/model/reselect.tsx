import { createSelector } from "reselect";

const theme = state => state.applet.theme;
const pageIndex = state => state.applet.pageIndex;
const pages = state => state.applet.pages;
const components = state => state.applet.components;
const componentStyle = state => state.applet.componentStyle;
const componentIndex = state => state.applet.componentIndex;
const drawer = state => state.applet.drawer;
const drawerType = state => state.applet.drawerType;

// 页面数据
export const appletEditStore = createSelector(
  [theme, pageIndex, pages],
  (theme, pageIndex, pages) => {
    return { theme, pageIndex, pages };
  }
);

export const appletCanvasStore = createSelector(
  [theme, pageIndex, pages, components, componentStyle, componentIndex],
  (theme, pageIndex, pages, components, componentStyle, componentIndex) => {
    return {
      theme,
      pageIndex,
      pages,
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
  [components, componentIndex, theme],
  (components, componentIndex, theme) => {
    return { components, componentIndex, theme };
  }
);

export const UIStyleEditStore = createSelector(
  [componentStyle, componentIndex, theme],
  (componentStyle, componentIndex, theme) => {
    return { componentStyle, componentIndex, theme };
  }
);

export const DragStore = createSelector(
  [componentStyle, components],
  (componentStyle, components) => {
    return { componentStyle, components };
  }
);
