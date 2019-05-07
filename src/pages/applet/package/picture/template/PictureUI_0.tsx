import { css } from "@emotion/core";
import React, { memo } from "react";
import { PictureFace } from "../../../types";

interface IProps {
  theme: string;
  data: PictureFace;
}

export const $$picture0: PictureFace = {
  type: "picture",
  img: "http://src.e7wei.com/0.2823198691104869.png",
  typeId: 0,
  radius: 0,
  width: 120,
  height: 120,
  top: 0,
  left: 0
};
export const $$pictureStyle0 = {
  marginTop: 0,
  marginBottom: 8,
  paddingTop: 16,
  paddingBottom: 16,
  height: 300,
  bgColor: "#fff",
  bgImg: "",
  paddingLeft: 130,
  paddingRight: 130
};

export default memo((props: IProps) => {
  const { img, width, height, radius } = props.data;
  const styles = css`
    width: ${width}px;
    height: ${height}px;
    border-radius: ${radius}px;
  `;

  return <img css={styles} src={img} alt={"picture"} />;
});
