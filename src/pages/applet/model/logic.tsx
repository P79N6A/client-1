import $$form, { $$formStyle0 } from "../package/form/database";
import { appletAction } from "./store";
import { $$text0, $$textStyle0 } from "../package/text/template/TextUI_0";
import {
  $$button0,
  $$buttonStyle0
} from "../package/button/template/ButtonUI_0";
import {
  $$picture0,
  $$pictureStyle0
} from "../package/picture/template/PictureUI_0";
import {
  $$drag0,
  $$drag0List,
  $$dragStyle0
} from "../package/drag/template/database-0";
import { $$video0, $$videoStyle0 } from "../package/video/template/VideoUI_0";
import { $$show0, $$showStyle0 } from "../package/show/template/ShowUI_0";
import {
  $$navigation0,
  $$navigationStyle0
} from "../package/navigation/template/NavigationUI_0";
// ==============================================applet-edit页面================

/**
 * pages -> uiList 添加 ui组件
 * TODO bug警告：pageIndex 必须有值，即必须有页面存在
 * 流程：
 * 1. 创建 index 用于 components , components style
 * 2. 将 index 填充进 pages -> uiList 中
 * 3. 根据 index 创建 components ，components style 新 item
 * 4. 展示 drawer
 * 5. drawer 中展示相对应的 组件编辑器
 * 6. 设置 componentIndex 为当前Index
 * @param action
 * @param componentType 需要填充的组件数据集
 */
export const componentAddLogic = (action, componentType) => {
  // 1. 创建 index 用于 components , components style
  const index = `${new Date().getTime()}`;
  // 2. 将 index 填充进 pages -> uiList 中
  action({
    type: appletAction.pageSet,
    payload: { setType: "uiList", componentIndex: index }
  });
  // 3. 根据 index 创建 components ，components style 新 item
  switch (componentType) {
    case "按钮":
      action({
        type: appletAction.componentsAdd,
        payload: { componentIndex: index, componentData: $$button0 }
      });
      action({
        type: appletAction.componentStyleAdd,
        payload: {
          componentStyleIndex: index,
          componentStyleData: $$buttonStyle0
        }
      });
      // 5. drawer 中展示相对应的 组件编辑器
      action({
        type: appletAction.drawerTypeSet,
        payload: { drawerType: $$button0.type }
      });
      break;
    case "图片":
      action({
        type: appletAction.componentsAdd,
        payload: { componentIndex: index, componentData: $$picture0 }
      });
      action({
        type: appletAction.componentStyleAdd,
        payload: {
          componentStyleIndex: index,
          componentStyleData: $$pictureStyle0
        }
      });
      // 5. drawer 中展示相对应的 组件编辑器
      action({
        type: appletAction.drawerTypeSet,
        payload: { drawerType: "picture" }
      });
      break;
    case "文本":
      action({
        type: appletAction.componentsAdd,
        payload: {
          componentIndex: index,
          componentData: $$text0(new Date().getTime())
        }
      });
      action({
        type: appletAction.componentStyleAdd,
        payload: {
          componentStyleIndex: index,
          componentStyleData: $$textStyle0
        }
      });
      // 5. drawer 中展示相对应的 组件编辑器
      action({
        type: appletAction.drawerTypeSet,
        payload: { drawerType: "text" }
      });
      break;
    case "自由布局":
      action({
        type: appletAction.componentsAdd,
        payload: { componentIndex: index, componentData: $$drag0 }
      });
      // 向drag 组件中注入UI列表
      $$drag0.uiList.map((data, index) => {
        action({
          type: appletAction.componentsAdd,
          payload: { componentIndex: data, componentData: $$drag0List[index] }
        });
      });
      action({
        type: appletAction.componentStyleAdd,
        payload: {
          componentStyleIndex: index,
          componentStyleData: $$dragStyle0
        }
      });
      // 5. drawer 中展示相对应的 组件编辑器
      action({
        type: appletAction.drawerTypeSet,
        payload: { drawerType: $$drag0.type }
      });
      break;
    case "魔方导航":
      action({
        type: appletAction.componentsAdd,
        payload: { componentIndex: index, componentData: $$navigation0 }
      });
      action({
        type: appletAction.componentStyleAdd,
        payload: {
          componentStyleIndex: index,
          componentStyleData: $$navigationStyle0
        }
      });
      // 5. drawer 中展示相对应的 组件编辑器
      action({
        type: appletAction.drawerTypeSet,
        payload: { drawerType: $$navigation0.type }
      });
      break;
    case "商品展示":
      action({
        type: appletAction.componentsAdd,
        payload: { componentIndex: index, componentData: $$show0 }
      });
      action({
        type: appletAction.componentStyleAdd,
        payload: {
          componentStyleIndex: index,
          componentStyleData: $$showStyle0
        }
      });
      // 5. drawer 中展示相对应的 组件编辑器
      action({
        type: appletAction.drawerTypeSet,
        payload: { drawerType: "show" }
      });
      break;
    case "视频":
      action({
        type: appletAction.componentsAdd,
        payload: { componentIndex: index, componentData: $$video0 }
      });
      action({
        type: appletAction.componentStyleAdd,
        payload: {
          componentStyleIndex: index,
          componentStyleData: $$videoStyle0
        }
      });
      // 5. drawer 中展示相对应的 组件编辑器
      action({
        type: appletAction.drawerTypeSet,
        payload: { drawerType: "video" }
      });
      break;
    case "表单":
      action({
        type: appletAction.componentsAdd,
        payload: { componentIndex: index, componentData: $$form }
      });
      action({
        type: appletAction.componentStyleAdd,
        payload: {
          componentStyleIndex: index,
          componentStyleData: $$formStyle0
        }
      });
      // 5. drawer 中展示相对应的 组件编辑器
      action({
        type: appletAction.drawerTypeSet,
        payload: { drawerType: "form" }
      });
      break;
  } // 创建 component 数据
  // 4. 展示 drawer
  action({ type: appletAction.drawerSet, payload: { drawer: true } });
  // 6. 设置 componentIndex 为当前Index
  action({
    type: appletAction.componentIndexSet,
    payload: { componentIndex: index }
  });
};

/**
 * pages add 新建页面
 * 流程：
 * 1. 创建 index 用于 page
 * 2. 根据 index 新建页面
 * 3. pageIndex 落点 落在新建的页面中
 * 4. drawer 关闭展示
 * 5. 设置 componentIndex 为默认
 * 6. drawer 中展示组件编辑器 设为默认
 * @param action
 */
export const pageAddLogic = action => {
  // 1. 创建 index 用于 page
  const index = `${new Date().getTime()}`;
  // 2. 根据 index 新建页面
  action({ type: appletAction.pageAdd, payload: { pageIndex: index } });
  // 3. pageIndex 落点 落在新建的页面中
  action({
    type: appletAction.pageIndexSet,
    payload: { pageIndex: index }
  });
  // 4. drawer 关闭展示
  action({ type: appletAction.drawerSet, payload: { drawer: false } });
  // 5. 设置 componentIndex 为默认
  action({
    type: appletAction.componentIndexSet,
    payload: { componentIndex: undefined }
  });
  // 6. drawer 中展示组件编辑器 设为默认
  action({
    type: appletAction.drawerTypeSet,
    payload: { drawerType: undefined }
  });
};

/**
 * pages remove 删除页面
 * 流程：
 * 1. 循环需要删除的存有页面index 的 页面列表
 * 2. 删除页面
 * 3. 根据页面中 的 uiList 列表删除对应的 components 与 component style 数据
 * 4. pageIndex 落点 第一页中（TODO bug警告：如果页面全部删除，有可能会报错，暂时无法复现,目前返回undefined）
 * 5. 设置 componentIndex 为默认
 * @param action
 * @param pageIndexList
 * @param pages
 */
export const pageRemoveLogic = (action, pageIndexList, pages) => {
  // 1. 循环需要删除的存有页面index 的 页面列表
  pageIndexList.map(pageIndex => {
    // 2. 删除页面
    action({
      type: appletAction.pageRemove,
      payload: { pageIndex }
    });
    // 3. 根据页面中 的 uiList 列表删除对应的 components 与 component style 数据
    pages[pageIndex].uiList.map(componentIndex => {
      action({ type: appletAction.componentsRemove, payload: componentIndex });
      action({
        type: appletAction.componentStyleRemove,
        payload: componentIndex
      });
    });
  });
  // 4. pageIndex 落点 落在新建的页面中
  action({
    type: appletAction.pageIndexSet,
    payload: {
      pageIndex: undefined
    }
  });
  // 5. 设置 componentIndex 为默认
  action({
    type: appletAction.componentIndexSet,
    payload: { componentIndex: undefined }
  });
};

/**
 * page Index 修改
 * 流程：
 * 1. 传递的是一个数组，所以先判断这个数组是否为空
 * 2. 取出目标  页面下标 并传递
 * 3. 设置 componentIndex 为默认
 * 4. drawType 设为默认值
 * @param action
 * @param key 选择的下标 （antd 给的是数据集合,我们只要一个数据就可以）
 */
export const pageSetIndexLogic = (action, key: string[]) => {
  // 1. 传递的是一个数组，所以先判断这个数组是否为空
  if (key.length !== 0) {
    // 2. 取出目标  页面下标 并传递
    action({ type: appletAction.pageIndexSet, payload: { pageIndex: key[0] } });
    // 3.  设置 componentIndex 为默认
    action({
      type: appletAction.componentIndexSet,
      payload: { componentIndex: undefined }
    });
    // 4. drawType 设为默认值
    action({
      type: appletAction.drawerTypeSet,
      payload: { componentIndex: { drawerType: undefined } }
    });
  }
};

/**
 * theme 修改主题色
 * 流程
 * 1. 传递新的主题色
 * @param action
 * @param theme
 */
export const themeSetLogic = (action, theme) => {
  // 1. 传递新的主题色
  action({ type: appletAction.themeSet, payload: { theme } });
};

/**
 * pages-> title 修改指定页面title
 * 流程
 * 1. 传递新的title
 * @param action
 * @param pageIndex
 * @param title
 */
export const pageSetTitleLogic = (action, pageIndex, title): void => {
  // 1. 传递新的title
  action({
    type: appletAction.pageSet,
    payload: { setType: "title", pageIndex, title }
  });
};

// ==============================================applet-canvas页面================

/**
 * pages-> uiList   组件下移
 * 流程
 * 1. 获取需要下移的组件 index，并发送action
 * @param action
 * @param uiListIndex
 */
export const componentMoveDown = (action, uiListIndex) => {
  // 1. 获取需要下移的组件 index，并发送action
  action({
    type: appletAction.pageSet,
    payload: { setType: "uiListItemDown", uiListIndex }
  });
};

/**
 * pages-> uiList   组件上移
 * 流程
 * 1. 获取需要上移的组件 index，并发送action
 * @param action
 * @param uiListIndex
 */
export const componentMoveUp = (action, uiListIndex) => {
  // 1. 获取需要下移的组件 index，并发送action
  action({
    type: appletAction.pageSet,
    payload: { setType: "uiListItemUp", uiListIndex }
  });
};

/**
 * pages-> uiList 组件删除
 * 流程
 * 1. 根据 uiList index 删除
 * 2. 删除component 与 component style 中相关的 index
 * 3. 关闭 drawer 的显示
 * 4. drawer 中当前的操作项为默认值
 * 5. component index 设为默认值
 * @param action
 * @param uiListIndex
 */
export const pageUIListRemoveItem = (action, uiListIndex) => {
  // 1. 根据 uiList index 删除
  action({
    type: appletAction.pageSet,
    payload: { setType: "uiListItemRemove", uiListIndex }
  });
  // 2. 删除component 与 component style 中相关的 index
  action({
    type: appletAction.componentsRemove,
    payload: { componentIndex: uiListIndex }
  });
  action({
    type: appletAction.componentStyleRemove,
    payload: { componentIndex: uiListIndex }
  });
  // 3. 关闭 drawer 的显示
  action({ type: appletAction.drawerSet, payload: { drawer: false } });
  // 4. 关闭 drawer 中当前的操作想
  action({ type: appletAction.drawerTypeSet, payload: undefined });
  // 5. component index 设为默认值
  action({
    type: appletAction.componentIndexSet,
    payload: { componentIndex: undefined }
  });
};

/**
 * component Index  切换至当前选中的组件
 * 流程
 * 1. 发送需要修改的新 componentIndex
 * 2. 打开 drawer
 * 3. 修改 drawer 的操作类型
 * @param action
 * @param componentIndex 选择的下标
 * @param type
 */
export const componentChange = (action, componentIndex, type) => {
  // 1. 发送需要修改的新 componentIndex
  action({ type: appletAction.componentIndexSet, payload: { componentIndex } });
  // 2. 打开 drawer
  action({ type: appletAction.drawerSet, payload: { drawer: true } });
  // 3. 修改 drawer 的操作类型
  action({ type: appletAction.drawerTypeSet, payload: { drawerType: type } });
};

/**
 * component drag -> uiList 向drag UIList中添加组件
 * 流程
 * 1. 创建index 用于 components 与 components style 的index
 * 2. 将 index 插入 drag uiList 中
 * 3. 使用 index 创建 components 与 components style
 * 4. 设置 dragIndex 为当前Index
 * @param action
 * @param type
 */
export const dragAddComponent = (action, type) => {
  // 1. id 用于page_ui 与 ui_style 的key
  const index = `${new Date().getTime()}`;
  // 2. 将 index 插入 drag uiList 中
  action({
    type: appletAction.componentsSet,
    payload: { setType: "dragAddComponent", componentIndex: index }
  });
  // 3. 使用 index 创建 components 与 components style
  let dataSource; // 记录将要传递额数据
  switch (type) {
    case "button":
      dataSource = $$button0;
      break;
    case "picture":
      dataSource = $$picture0;
      break;
    case "text":
      dataSource = $$text0(new Date().getTime());
      break;
  } // 创建 page_ui 数据
  action({
    type: appletAction.componentsAdd,
    payload: { componentIndex: index, componentData: dataSource }
  });
  action({
    type: appletAction.componentStyleAdd,
    payload: { componentStyleIndex: index }
  });
  // 4. 设置 dragIndex 为当前Index
  action({
    type: appletAction.dragIndexSet,
    payload: { dragIndex: index }
  });
};

/**
 * component -> Data 修改component drag中的数据
 * @param action
 * @param componentData
 */
export const componentDragSetData = (action, componentData) => {
  action({
    type: appletAction.componentsSet,
    payload: { setType: "dragMoveComponent", componentData }
  });
};

// ==============================================公共================

/**
 * drawer 关闭/开启drawer
 * 流程
 * 1. 控制drawer 的开关
 * @param action
 * @param drawer
 */
export const drawerSetLogic = (action, drawer) => {
  action({ type: appletAction.drawerSet, payload: { drawer } });
};

/**
 * component -> Data 修改component中的数据
 * @param action
 * @param componentData
 */
export const componentSetData = (action, componentData) => {
  action({
    type: appletAction.componentsSet,
    payload: { setType: "common", componentData }
  });
};

/**
 * component style 修改其中的数据
 * @param action
 * @param componentStyleData
 */
export const componentStyleSetData = (action, componentStyleData) => {
  action({
    type: appletAction.componentStyleSet,
    payload: { componentStyleData }
  });
};

/**
 *  drag index 的值修改
 */
export const dragSet = (action, dragIndex) => {
  action({
    type: appletAction.dragIndexSet,
    payload: { dragIndex }
  });
};
