import { commonData, ICommonData } from "../_common/database";

export interface IVideo extends ICommonData {
  type: string;
  src: string;
  autoPlay: boolean;
  height: number;
}

const $$video: IVideo = {
  // 类型
  type: "video",
  // 视频链接
  src: "",
  // 是否自动播放
  autoPlay: false,
  height: 80,
  // 公共数据
  ...commonData(100)
};

export default $$video;
