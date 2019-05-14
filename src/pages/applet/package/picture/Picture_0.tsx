import { css } from "@emotion/core";
import React, { memo } from "react";

interface $$picture0 {
  component: {
    type: string;
    typeId: string;
    img: string;
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
export const $$picture0: $$picture0 = {
  component: {
    type: "picture",
    typeId: "picture0",
    img: "http://src.e7wei.com/0.2823198691104869.png",
    radius: 0,
    width: 120,
    height: 120,
    top: 0,
    left: 0
  },
  style: {
    marginTop: 0,
    marginBottom: 8,
    paddingTop: 16,
    paddingBottom: 16,
    height: 152,
    bgColor: "#fff",
    bgImg: "",
    paddingLeft: 130,
    paddingRight: 130
  }
};

interface IProps {
  theme: string;
  data: $$picture0["component"];
}
export default memo((props: IProps) => {
  const { img, width, height, radius } = props.data;
  const styles = css`
    width: ${width}px;
    height: ${height}px;
    border-radius: ${radius}px;
  `;

  return <img css={styles} src={img} alt={"component"} />;
});
