import { css } from "@emotion/core";
import React, { memo } from "react";
import { IVideo } from "./database";

interface IProps {
  theme: string;
  data: IVideo;
}

const VideoUI = memo((props: IProps) => {
  const { theme, data } = props;
  const {
    height,
    src,
    poster,
    autoPlay,
    marginTop,
    marginBottom,
    paddingTop,
    paddingBottom,
    bgColor,
    bgImg,
    paddingLeft,
    paddingRight
  } = data;
  const styles = {
    block: css`
      white-space: pre-wrap;
      width: 100%;
      height: ${height}px;
      margin-top: ${marginTop}px;
      margin-bottom: ${marginBottom}px;
      padding-top: ${paddingTop}px;
      padding-bottom: ${paddingBottom}px;
      background-color: ${bgColor};
      ${bgImg ? `background:url(${bgImg})` : ""};
      padding-left: ${paddingLeft}px;
      padding-right: ${paddingRight}px;
    `
  };

  return (
    <video
      css={styles.block}
      controls={true}
      src={src}
      poster={poster}
      autoPlay={autoPlay}
    />
  );
});

export default VideoUI;
