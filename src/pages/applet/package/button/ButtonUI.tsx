import { css } from "@emotion/core";
import React, { memo } from "react";
import { ButtonFace } from "../../types";

interface IProps {
  theme: string;
  data: ButtonFace;
  absolute?: boolean;
  style: {
    marginTop: number;
    marginBottom: number;
    paddingTop: number;
    paddingBottom: number;
    height: number;
    paddingLeft: number;
    paddingRight: number;
    bgColor: string;
    bgImg: string;
  };
}

export default memo((props: IProps) => {
  // 私有属性
  const { theme, data, style, absolute } = props;
  const { width, height, radius, color, btnColor, btnImg } = data;

  const styles = {
    block: css`
      white-space: pre-wrap;
      width: ${absolute ? data.width : "100%"};
      height: ${absolute ? data.height : "auto"};
      margin-top: ${style.marginTop}px;
      margin-bottom: ${style.marginBottom}px;
      padding-top: ${style.paddingTop}px;
      padding-bottom: ${style.paddingBottom}px;
      background-color: ${style.bgColor};
      ${style.bgImg ? `background:url(${style.bgImg})` : ""};
      padding-left: ${style.paddingLeft}px;
      padding-right: ${style.paddingRight}px;
    `,
    button: css`
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
      <div css={styles.button}>{data.desc}</div>
    </div>
  );
});
