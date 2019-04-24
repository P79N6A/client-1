import { AppletAction } from "./store";
import $$button from "../package/button/database";
import $$picture from "../package/picture/database";
import $$text from "../package/text/database";
import $$drag from "../package/drag/database";
import $$navigation from "../package/navigation/database";
import $$show from "../package/show/database";
import $$video from "../package/video/database";
import $$form from "../package/form/database";

/**
 * 新建页面
 * @param action
 */
export const addPageLogic = action => {
  // id 用于页面key
  const createId = `${new Date().getTime()}`;
  action({ type: AppletAction.addPage, payload: createId });
};

/**
 * 向页面UI中添加数据
 * @param action
 * @param typeName
 */
export const addUiLogic = (action, typeName) => {
  // id 用于page_ui 与 ui_style 的key
  const createId = `${new Date().getTime()}`;
  // 记录将要传递额数据
  let dataSource;
  // 创建 page_ui 数据
  switch (typeName) {
    case "按钮":
      dataSource = $$button;
      break;
    case "图片":
      dataSource = $$picture;
      break;
    case "文本":
      dataSource = $$text(new Date().getTime());
      break;
    case "自由布局":
      dataSource = $$drag;
      break;
    case "魔方导航":
      dataSource = $$navigation;
      break;
    case "商品展示":
      dataSource = $$show;
      break;
    case "视频":
      dataSource = $$video;
      break;
    case "表单":
      dataSource = $$form;
      break;
  }
  // 创建 page_ui 数据
  action({
    type: AppletAction.addUi,
    payload: { uiKey: createId, data: dataSource }
  });
  // 创建 ui_style 数据
  action({ type: AppletAction.addUiStyle, payload: createId });
  // 将下标绑定至页面editDrawerVisible中
  action({
    type: AppletAction.setPageInUIList,
    payload: createId
  });
  // 显示对应的编辑项
  action({ type: AppletAction.setDrawer, payload: true });
  // 修改当前的编辑项名称
  action({ type: AppletAction.setDrawerType, payload: dataSource.type });
  // 设置当前设置组件的下标
  action({ type: AppletAction.setUIKey, payload: createId });
};

/**
 * 修改page_id
 * @param action
 * @param key 选择的下标 （antd 给的是数据集合,我们只要一个数据就可以）
 */
export const setPageIdLogic = (action, key) => {
  if (key.length !== 0) {
    action({ type: AppletAction.setPageKey, payload: key[0] });
  }
};

/**
 * 修改指定页面title
 * @param action
 * @param pageKey
 * @param title
 */
export const setPageTitleLogic = (action, pageKey, title): void => {
  action({
    type: AppletAction.setPageInTitle,
    payload: { pageKey, title }
  });
};

/**
 * 修改主题色
 * @param action
 * @param color
 */
export const setThemeLogic = (action, color) => {
  action({ type: AppletAction.setTheme, payload: color });
};

/**
 * 删除页面
 * @param action
 * @param pageKeyList
 * @param pages
 */
export const delPageLogic = (action, pageKeyList, pages) => {
  pageKeyList.map(pageKey => {
    pages[pageKey].uiList.map(uiKey => {
      action({ type: AppletAction.delUi, payload: uiKey });
      action({ type: AppletAction.delUiStyle, payload: uiKey });
    });
    action({ type: AppletAction.delPage, payload: pageKey });
  });
  action({
    type: AppletAction.setPageKey,
    payload: Object.keys(pages)[0]
  });
};

/**
 * 关闭/开启drawer
 * @param action
 * @param isShow
 */
export const setDrawerLogic = (action, isShow) => {
  action({ type: AppletAction.setDrawer, payload: isShow });
};

/**
 * 修改ui中的数据
 * @param action
 * @param data
 */
export const setUIData = (action, data) => {
  action({ type: AppletAction.setUi, payload: { data } });
};

/**
 * 修改uiStyle中的数据
 * @param action
 * @param data
 */
export const setUIStyleData = (action, data) => {
  action({ type: AppletAction.setUiStyle, payload: { data } });
};

/**
 * 修改uiKey
 * @param action
 * @param key 选择的下标 （antd 给的是数据集合,我们只要一个数据就可以）
 * @param type
 */
export const canvasUIChoose = (action, key, type) => {
  action({ type: AppletAction.setUIKey, payload: key });
  action({ type: AppletAction.setDrawerType, payload: type });
};

/**
 * 组件上移
 * @param action
 * @param key
 */
export const canvasUIMoveUp = (action, key) => {
  action({ type: AppletAction.movePageInUIListUp, payload: key });
};

/**
 * 组件下移
 * @param action
 * @param key
 */
export const canvasUIMoveDown = (action, key) => {
  action({ type: AppletAction.movePageInUIListDown, payload: key });
};

/**
 * 组件删除
 * @param action
 * @param key
 */
export const canvasUIDel = (action, key) => {
  action({ type: AppletAction.delPageInUIList, payload: key });
  action({ type: AppletAction.delUi, payload: key });
  action({ type: AppletAction.delUiStyle, payload: key });

  action({ type: AppletAction.setDrawer, payload: false });

  action({ type: AppletAction.setUIKey, payload: undefined });
  action({ type: AppletAction.setDrawerType, payload: undefined });
};

/**
 * 项drag中添加组件
 * @param action
 * @param type
 * @param length
 */
export const addUITODrag = (action, type, length) => {
  // id 用于page_ui 与 ui_style 的key
  const createId = `${new Date().getTime()}`;
  // 记录将要传递额数据
  let dataSource;
  // 创建 page_ui 数据
  switch (type) {
    case "button":
      dataSource = $$button;
      break;
    case "picture":
      dataSource = $$picture;
      break;
    case "text":
      dataSource = $$text(new Date().getTime());
      break;
  }
  // 创建 ui 数据
  action({
    type: AppletAction.addUi,
    payload: { uiKey: createId, data: dataSource }
  });
  // 创建 ui_style 数据
  action({ type: AppletAction.addUiStyle, payload: createId });
  // 将下标绑定至drag uiList中
  action({
    type: AppletAction.setUiDrag,
    payload: createId
  });
  // 修改当前的编辑项名称
  action({ type: AppletAction.setUIKey, payload: createId });
};
