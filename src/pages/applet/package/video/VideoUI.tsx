import { css } from "@emotion/core";
import React, { memo } from "react";
import { VideoFace } from "../../types";

interface IProps {
  theme: string;
  data: VideoFace;
  style: any;
}

const VideoUI = memo((props: IProps) => {
  const { theme, data, style } = props;
  const {
    height,
    src,

    autoPlay
  } = data;
  const styles = {
    block: css`
      white-space: pre-wrap;
      width: 100%;
      height: ${height}px;
      margin-top: ${style.marginTop}px;
      margin-bottom: ${style.marginBottom}px;
      padding-top: ${style.paddingTop}px;
      padding-bottom: ${style.paddingBottom}px;
      background-color: ${style.bgColor};
      ${style.bgImg ? `background:url(${style.bgImg})` : ""};
      padding-left: ${style.paddingLeft}px;
      padding-right: ${style.paddingRight}px;
    `
  };

  return (
    <video css={styles.block} controls={true} src={src} autoPlay={autoPlay} />
  );
});

export default VideoUI;
