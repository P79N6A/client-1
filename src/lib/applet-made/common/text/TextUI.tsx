import { css } from "@emotion/core";
import React, { memo } from "react";
import { IText } from "./database";

interface IProps {
  theme: string;
  data: IText;
}

export default memo((props: IProps) => {
  // 私有属性
  const { theme, data } = props;
  const {
    marginTop,
    marginBottom,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    blockHeight,
    bgColor,
    bgImg
  } = data;
  const styles = css`
    white-space: pre-wrap;
    width: 100%;
    min-height: ${blockHeight}px;
    color: ${theme};
    margin-top: ${marginTop}px;
    margin-bottom: ${marginBottom}px;
    padding-top: ${paddingTop}px;
    padding-bottom: ${paddingBottom}px;
    padding-left: ${paddingLeft}px;
    padding-right: ${paddingRight}px;
    background-color: ${bgColor};
    ${bgImg ? `background:url(${bgImg})` : ""};
    p {
      margin: 0;
    }
  `;

  return <div css={styles} dangerouslySetInnerHTML={{ __html: data.html }} />;
});
