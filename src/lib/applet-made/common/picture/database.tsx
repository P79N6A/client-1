import { commonData, ICommonData } from "../_common/database";

export interface IPicture extends ICommonData {
  type: string;
  img: string;
  radius: number;
  width: number;
  height: number;
}

const $$picture: IPicture = {
  type: "picture",
  img: "http://src.e7wei.com/0.2823198691104869.png",
  radius: 0,
  width: 100,
  height: 50,
  // 公共数据
  ...commonData(100)
};

export default $$picture;
