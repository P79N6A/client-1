import { css } from "@emotion/core";
import React, { memo } from "react";
import { PictureFace } from "../../types";

interface IProps {
  theme: string;
  data: PictureFace;
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

const PictureUI = memo((props: IProps) => {
  // 私有属性
  const { data, style, absolute } = props;
  const { img, width, height, radius } = data;
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
