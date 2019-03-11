import appletService from '@/pages/applet/services/appletService';

// 接口
interface defaultUiState {
  // 命名空间
  namespace: string;
  // 状态
  state: {
    pages: [];
    theme: {};
  };
  // 更新数据
  reducers: {};
  // 副作用
  effects: {};
  // 订阅
  subscriptions: {};
}

// 数据
const applet: defaultUiState = {
  namespace: 'applet',

  state: {
    pages: [],
    theme: {},
  },

  reducers: {
    applet_data_update(state, { payload: { data } }) {
      state.pages = data.pages;
      state.theme = data.theme;
      return state;
    },
  },

  effects: {
    // 用户信息后台获取
    *applet_data_obtain(action, { call, put }) {
      const { data } = yield call(appletService);
      yield put({ type: 'applet_data_update', payload: { data } });
    },
  },

  subscriptions: {
    // 数据初始化
    initialize({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/applet') {
          dispatch({ type: 'applet_data_obtain', payload: query });
        }
      });
    },
  },
};

// 导出
export default { ...applet };
