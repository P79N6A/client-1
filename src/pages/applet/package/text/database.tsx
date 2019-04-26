import { TextFace } from "../../types";

const $$text = (id: string | number): TextFace => {
  return {
    type: "text",
    typeId: 0, // 用于区分使用哪套模板
    id, // 用于辨析 富文本的id
    html: "<p>这里填充文案</p>",
    // 为拖动提供数据集，一般情况下不使用
    width: 100,
    height: 50,
    top: 0,
    left: 0
  };
};

export default $$text;
