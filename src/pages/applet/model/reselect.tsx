import { createSelector } from "reselect";

const theme = state => state.applet.theme;
const pageKey = state => state.applet.pageKey;
const pages = state => state.applet.pages;
const ui = state => state.applet.ui;
const uiStyle = state => state.applet.uiStyle;
const uiKey = state => state.applet.uiKey;
const drawer = state => state.applet.drawer;
const drawerType = state => state.applet.drawerType;
const dragKey = state => state.applet.dragKey;

// 页面数据
export const appletEditStore = createSelector(
  [theme, pageKey, pages],
  (theme, pageKey, pages) => {
    return { theme, pageKey, pages };
  }
);

export const appletCanvasStore = createSelector(
  [theme, pageKey, pages, ui, uiStyle, uiKey],
  (theme, pageKey, pages, ui, uiStyle, uiKey) => {
    return { theme, pageKey, pages, ui, uiStyle, uiKey };
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
  [ui, uiKey, theme, dragKey],
  (ui, uiKey, theme, dragKey) => {
    return { ui, uiKey, theme, dragKey };
  }
);

export const UIStyleEditStore = createSelector(
  [uiStyle, uiKey, theme],
  (uiStyle, uiKey, theme) => {
    return { uiStyle, uiKey, theme };
  }
);

export const DragStore = createSelector(
  [uiStyle, ui],
  (uiStyle, ui) => {
    return { uiStyle, ui };
  }
);
