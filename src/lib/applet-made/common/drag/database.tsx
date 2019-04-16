import { commonData, ICommonData } from "../_common/database";
import { IButton } from "../button/database";
import { IPicture } from "../picture/database";
import { IText } from "../text/database";

export interface IDrag extends ICommonData {
  type: string;
  uiList: any;
  top: number;
  left: number;
}

const $$drag: IDrag = {
  type: "drag",
  uiList: [
    {
      type: "text",
      id: 1555395174569,
      html: '<p style="text-align:center;">这里填充文案</p>',
      left: 0,
      top: 0,
      marginTop: 5,
      marginBottom: 5,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      bgColor: "#fff",
      bgImg: "",
      blockHeight: 40,
      width: 100,
      height: 120
    },
    {
      type: "button",
      desc: "按钮",
      fontSize: 14,
      color: "",
      radius: 0,
      width: 56,
      height: 56,
      btnImg: "",
      btnColor: "#fff",
      left: 120,
      top: 8,
      marginTop: 5,
      marginBottom: 5,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      bgColor: "#fff",
      bgImg: "",
      blockHeight: 60
    },
    {
      type: "picture",
      img: "http://src.e7wei.com/0.2823198691104869.png",
      radius: 0,
      width: 55,
      height: 55,
      left: 200,
      top: 0,
      marginTop: 5,
      marginBottom: 5,
      paddingTop: 0,
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
      bgColor: "#fff",
      bgImg: "",
      blockHeight: 55
    }
  ],
  top: 0,
  left: 0,
  // 公共数据
  ...commonData(100)
};

export default $$drag;
