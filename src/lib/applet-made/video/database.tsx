/**
 * @Date 2019年04月08日13:46:33
 * @description 视频组件数据源
 */
import { commonData, ICommonData } from "../_common/database";

export interface IVideo extends ICommonData {
  type: string;
  src: string;
  poster: string;
  autoPlay: boolean;
}

const $$video: IVideo = {
  // 类型
  type: "video",
  // 视频链接
  src: "",
  // 视频封面
  poster: "",
  // 是否自动播放
  autoPlay: false,
  // 公共数据
  ...commonData("视频组件", "视频组件介绍", 100)
};

export default $$video;
