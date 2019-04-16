import { IAction } from "./typing";

/**
 * @description 修改reducer 数据源负载
 * 所有请求格式都统一如此，数据处理在页面中进行
 * @param type 操作类型名称
 * @param payload 负载(附带额数据)
 */
export const action = ({ type, payload }: IAction) => {
  return {
    payload,
    type
  };
};
