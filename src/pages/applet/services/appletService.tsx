import axios from 'axios';

// 获取用户小程序数据
const appletService = (userId = 'userId', token = 'token') => {
  return new Promise(resolve => {
    axios({
      method: 'post',
      url: '/api/applet',
      data: {
        id: userId,
        token: token,
      },
    }).then(response => {
      return resolve(response);
    });
  });
};

export default appletService;
