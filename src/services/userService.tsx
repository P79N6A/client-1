import axios from 'axios';

// 获取用户小程序数据
const userService = (userId = 'userId', token = 'token') => {
  return new Promise(resolve => {
    axios({
      method: 'post',
      url: '/api/user',
      data: {
        id: userId,
        token: token,
      },
    }).then(response => {
      return resolve(response);
    });
  });
};

export default userService;
