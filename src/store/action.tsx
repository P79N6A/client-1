/**
 * 🔒 文件请勿修改，此为固定函数
 */
import { IRxAction } from "../typing/redux";

/**
 * @description redux 发送数据修改请求
 * @param name action 名称
 * @param payload  携带数据
 */
const rxAction: IRxAction = (name, payload) => {
  return {
    type: name,
    payload: payload
  };
};

export { rxAction };
