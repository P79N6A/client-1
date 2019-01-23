/**
 * 🔒 文件请勿修改，此为固定函数
 * @description redux 发送数据修改请求
 * @param type action 名称
 * @param payload 携带数据
 * @return type: string; payload: <T>
 */

interface IRxAction<T> {
  type: string; // action 名称
  payload: T; // 携带数据
}
function rxAction<T>(type: string, payload: T): IRxAction<T> {
  return {
    type: type,
    payload: payload
  };
}

export {
  // 函数
  rxAction,
  // 接口
  IRxAction
};
