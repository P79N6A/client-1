import { css } from "@emotion/core";
import React, { memo } from "react";
import { PictureFace } from "../../../types";

interface IProps {
  theme: string;
  data: PictureFace;
}

export default memo((props: IProps) => {
  const { img, width, height, radius } = props.data;
  const styles = css`
    width: ${width}px;
    height: ${height}px;
    border-radius: ${radius}px;
  `;

  return <img css={styles} src={img} alt={"picture"} />;
});
