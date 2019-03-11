import userService from '@/services/userService';

// 接口
interface defaultGlobalState {
  // 命名空间
  namespace: string;
  // 状态
  state: {
    user: {
      name: string;
      phone: string;
      email: string;
      weChat: string;
      aliPay: string;
      address: string[];
      applet_key: string;
    };
  };
  // 更新数据
  reducers: {};
  // 副作用
  effects: {};
  // 订阅
  subscriptions: {};
}

// 数据
const global: defaultGlobalState = {
  namespace: 'global',

  state: {
    user: {
      name: '',
      phone: '',
      email: '',
      weChat: '',
      aliPay: '',
      address: [],
      applet_key: '',
    },
  },

  reducers: {
    // 用户信息数据更新
    user_update(state, { payload: { data } }) {
      return { ...state, user: { ...data } };
    },
  },

  effects: {
    // 用户信息后台获取
    *user_obtain(action, { call, put }) {
      const { data } = yield call(userService);
      yield put({ type: 'user_update', payload: { data } });
    },
  },

  subscriptions: {
    // 数据初始化
    initialize({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        dispatch({ type: 'user_obtain', payload: query });
      });
    },
  },
};

// 导出
export default { ...global };
