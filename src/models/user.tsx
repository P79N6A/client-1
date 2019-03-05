export default {
  namespace: 'user',
  state: {
    uid: '',
    name: '',
    phone: '',
    email: '',
    weChat: '',
    aliPay: '',
    avatar: '',
    address: [],
  },
  reducers: {
    save(state, { payload: { data: list, total } }) {
      return { ...state, list, total };
    },
  },
};
