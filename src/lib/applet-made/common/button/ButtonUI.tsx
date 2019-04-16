import { css } from "@emotion/core";
import React, { memo } from "react";
import { IButton } from "./database";

interface IProps {
  theme: string;
  data: IButton;
}

export default memo((props: IProps) => {
  // 私有属性
  const { theme, data } = props;
  const {
    width,
    height,
    radius,
    color,
    marginTop,
    marginBottom,
    paddingTop,
    paddingBottom,
    blockHeight,
    bgColor,
    bgImg,
    btnColor,
    btnImg,
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
      color: ${color ? color : theme};
      width: ${width}px;
      height: ${height}px;
      border-radius: ${radius}px;
      background-color: ${btnColor};
      ${btnImg ? `background:url(${btnImg})` : ""};
      border: 1px black solid;
      display: flex;
      justify-content: center;
      align-items: center;
    `
  };

  return (
    <div css={styles.block}>
      <div css={styles.ui}>{data.desc}</div>
    </div>
  );
});
