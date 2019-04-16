import { commonData, ICommonData } from "../_common/database";

export interface IText extends ICommonData {
  type: string;
  id: string | number;
  html: string;
  width: number;
  height: number;
}

const $$text = (id: string | number, blockHeight: number) => {
  return {
    // 数据块类型
    type: "text",
    // 用于辨析 富文本的id
    id,
    // 文本
    html:
      '<p style="text-align:center;display: flex;justify-content: center;align-items: center;height:100%">这里填充文案</p><br/>',
    width: 100,
    height: 100,
    // 公共数据
    ...commonData(blockHeight)
  };
};

export default $$text;
