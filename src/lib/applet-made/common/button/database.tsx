import { commonData, ICommonData } from "../_common/database";

export interface IButton extends ICommonData {
  type: string;
  desc: string;
  fontSize: number;
  color: string;
  radius: number;
  width: number;
  height: number;
  top: number;
  left: number;
  btnImg: string;
  btnColor: string;
}

const $$button: IButton = {
  type: "button",
  desc: "按钮",
  fontSize: 14,
  color: "",
  radius: 0,
  width: 100,
  height: 30,
  // 按钮背景图
  btnImg: "",
  // 按钮背景色
  btnColor: "#fff",
  // 公共数据
  ...commonData(60)
};

export default $$button;
