/**
 * @Date 2019年04月08日13:46:33
 * @description 视频组件数据源
 */
import { commonData, ICommonData } from "../_common/database";

export interface IFree extends ICommonData {
  type: string;
  ui: [];
}

const $$free: IFree = {
  // 类型
  type: "free",
  // ui列表
  ui: [],
  // 公共数据
  ...commonData("自由布局组件", "自由布局组件介绍", 100)
};

export default $$free;
