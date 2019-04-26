import { css } from "@emotion/core";
import React, { memo } from "react";
import { ButtonFace } from "../../../types";

interface IProps {
  theme: string;
  data: ButtonFace;
}

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
