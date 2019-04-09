import { commonData, ICommonData } from "../_common/database";

export interface IPicture extends ICommonData {
  type: string;
  src: string;
}

const $$picture: IPicture = {
  // 类型
  type: "picture",
  src: "",
  // 公共数据
  ...commonData("图片组件", "图片组件介绍", 100)
};

export default $$picture;
