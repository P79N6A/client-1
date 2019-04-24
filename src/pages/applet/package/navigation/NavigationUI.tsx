import { css } from "@emotion/core";
import React, { memo } from "react";
import NavigationUI_0 from "./template/NavigationUI_0";
import { NavigationFace } from "../../types";

interface IProps {
  theme: string;
  data: NavigationFace;
  style: any;
}

export default memo((props: IProps) => {
  // 私有属性
  const { theme, data, style } = props;
  const {
    marginTop,
    marginBottom,
    paddingTop,
    paddingBottom,
    blockHeight,
    bgColor,
    bgImg,
    paddingLeft,
    paddingRight
  } = style;
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
    `
  };

  const template = [<NavigationUI_0 theme={theme} style={style} key={0} />];
  return <div css={styles.block}>{template[data.typeId]}</div>;
});
