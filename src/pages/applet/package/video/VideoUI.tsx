import React, { Fragment, memo } from "react";
import { VideoFace } from "../../types";
import TextUI_0 from "../text/TextUI";
import VideoUI_0 from "./template/VideoUI_0";

interface IProps {
  theme: string;
  data: VideoFace;
}

const VideoUI = memo((props: IProps) => {
  // 模板列表
  const template = {
    // 默认显示
    0: <VideoUI_0 {...props} />
  };

  // 更具typeId 展示组件
  return <Fragment>{template[props.data.typeId]}</Fragment>;
});

export default VideoUI;
