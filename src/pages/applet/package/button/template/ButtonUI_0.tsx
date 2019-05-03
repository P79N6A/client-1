import { css } from "@emotion/core";
import React, { memo } from "react";
import { ButtonFace } from "../../../types";

interface IProps {
  theme: string;
  data: ButtonFace;
}
export const $$button0: ButtonFace = {
  type: "button",
  typeId: 0,
  desc: "按钮",
  fontSize: 14,
  color: "",
  radius: 0,
  btnImg: "",
  btnColor: "#fff",
  width: 150,
  height: 40,
  top: 0,
  left: 0
};
export const $$buttonStyle0 = {
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 10,
  paddingBottom: 10,
  height: 300,
  bgColor: "",
  bgImg: "",
  paddingLeft: 120,
  paddingRight: 120
};

export default memo((props: IProps) => {
  // 私有属性
  const { theme, data } = props;
  const { width, height, radius, color, btnColor, btnImg } = data;

  const styles = {
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

  return <div css={styles.button}>{data.desc}</div>;
});
