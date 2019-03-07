/**
 * @description 用户
 */

// 接口
interface defaultUserState {
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
const user: defaultUserState = {
  namespace: 'user',

  state: {},

  reducers: {},

  effects: {},

  subscriptions: {},
};

// 导出
export default { ...user };
