import { css } from "@emotion/core";
import React, { memo } from "react";
import NavigationUI_0 from "./template/ShowUI_0";
import { NavigationFace } from "../../types";

interface IProps {
  theme: string;
  data: NavigationFace;
  style: any;
}

export default memo((props: IProps) => {
  // 私有属性
  const { theme, data, style } = props;
  const {} = data;
  const styles = {
    block: css`
      white-space: pre-wrap;
      width: 100%;
      min-height: ${style.blockHeight}px;
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

  const template = [<NavigationUI_0 theme={theme} data={data} key={0} />];
  return <div css={styles.block}>{template[data.typeId]}</div>;
});
