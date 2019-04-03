/**
 *  @description 画布渲染
 *  @author 陈迎
 *  功能及完成度
 */
import React, { memo } from "react";
import { IVideo } from "./database";

/**
 * 视频
 */
export default memo((props: IVideo) => {
  const { src, poster, autoPlay = false } = props;

  return (
    <video
      controls={true}
      style={{ width: "100%" }}
      src={src}
      poster={poster}
      autoPlay={autoPlay}
    />
  );
});
