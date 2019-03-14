import * as React from "react";
import { IVideo } from "./typing";

/**
 * 视频
 */
export default React.memo((props: IVideo) => {
  const { src, poster, autoPlay = false } = props;
  return <video src={src} poster={poster} autoPlay={autoPlay} />;
});
