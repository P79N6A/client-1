/**
 * @description 小程序
 */

// 接口
interface defaultAppletState {
  // 命名空间
  namespace: string;
  // 状态
  state: {
  };
  // 更新数据
  reducers: {};
  // 副作用
  effects: {};
  // 订阅
  subscriptions: {};
}

// 数据
const applet: defaultAppletState = {
  namespace: 'applet',

  state: {},

  reducers: {},

  effects: {},

  subscriptions: {},
};

// 导出
export default { ...applet };
