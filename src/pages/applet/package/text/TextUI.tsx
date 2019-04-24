import { css } from "@emotion/core";
import React, { memo } from "react";
import { TextFace } from "../../types";

interface IProps {
  data: TextFace;
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
  absolute?: boolean;
}

export default memo((props: IProps) => {
  // 私有属性
  const { data, style, absolute } = props;
  const styles = css`
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
    p {
      margin: 0;
    }
  `;

  return <div css={styles} dangerouslySetInnerHTML={{ __html: data.html }} />;
});
