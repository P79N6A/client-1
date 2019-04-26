import React, { memo } from "react";
import { VideoFace } from "../../../types";

interface IProps {
  theme: string;
  data: VideoFace;
}

export default memo((props: IProps) => {
  const { data } = props;
  const { src, autoPlay } = data;
  return <video controls={true} src={src} autoPlay={autoPlay} />;
});
