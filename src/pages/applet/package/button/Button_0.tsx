import { css } from "@emotion/core";
import React, { memo } from "react";

// button_0 数据集
interface IButton0 {
  component: {
    type: string;
    typeId: string;
    desc: string;
    color: string;
    bgImg: string;
    bgColor: string;
    fontSize: number;
    radius: number;
    width: number;
    height: number;
    top: number;
    left: number;
  };
  style: {
    bgColor: string;
    bgImg: string;
    marginTop: number;
    marginBottom: number;
    paddingTop: number;
    paddingBottom: number;
    height: number;
    paddingLeft: number;
    paddingRight: number;
  };
}
export const $$Button0: IButton0 = {
  component: {
    type: "button",
    typeId: "button0",
    desc: "按钮",
    bgColor: "#fff",
    fontSize: 14,
    color: "",
    radius: 0,
    bgImg: "",
    width: 150,
    height: 40,
    top: 0,
    left: 0
  },
  style: {
    marginTop: 0,
    marginBottom: 8,
    paddingTop: 16,
    paddingBottom: 16,
    height: 80,
    bgColor: "#fff",
    bgImg: "",
    paddingLeft: 120,
    paddingRight: 120
  }
};

// 组件样式
interface IProps {
  data: IButton0["component"];
  theme: string;
}
export default memo((props: IProps) => {
  // 私有属性
  const { theme, data } = props;
  const { width, height, radius, color, bgColor, bgImg, fontSize } = data;

  const styles = {
    button: css`
      color: ${color ? color : theme};
      font-size: ${fontSize}px;
      width: ${width}px;
      height: ${height}px;
      border-radius: ${radius}px;
      background-color: ${bgColor};
      ${bgImg ? `background:url(${bgImg})` : ""};
      border: 1px black solid;
      display: flex;
      justify-content: center;
      align-items: center;
    `
  };

  return <div css={styles.button}>{data.desc}</div>;
});
