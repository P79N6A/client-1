import { css } from "@emotion/core";
import React, { memo } from "react";
import { IPicture } from "./database";

interface IProps {
  theme: string;
  data: IPicture;
}

const PictureUI = memo((props: IProps) => {
  // 私有属性
  const { theme, data } = props;
  const {
    img,
    width,
    height,
    radius,
    marginTop,
    marginBottom,
    paddingTop,
    paddingBottom,
    blockHeight,
    bgColor,
    bgImg,
    paddingLeft,
    paddingRight
  } = data;
  const styles = {
    block: css`
      white-space: pre-wrap;
      width: 100%;
      min-height: ${blockHeight}px;
      margin-top: ${marginTop}px;
      margin-bottom: ${marginBottom}px;
      padding-top: ${paddingTop}px;
      padding-bottom: ${paddingBottom}px;
      background-color: ${bgColor};
      ${bgImg ? `background:url(${bgImg})` : ""};
      padding-left: ${paddingLeft}px;
      padding-right: ${paddingRight}px;
    `,
    ui: css`
      width: ${width}px;
      height: ${height}px;
      border-radius: ${radius}px;
    `
  };

  return (
    <div css={styles.block}>
      <img css={styles.ui} src={img} alt={"picture"} />
    </div>
  );
});

export default PictureUI;
