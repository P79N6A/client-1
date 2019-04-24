import { TextFace } from "../../types";

const $$text = (id: string | number): TextFace => {
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
    top: 0,
    left: 0
  };
};

export default $$text;
