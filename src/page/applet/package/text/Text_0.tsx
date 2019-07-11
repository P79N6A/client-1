import React, { memo } from "react";
import { css } from "@emotion/core";

interface $$text0 {
  component: {
    type: string;
    typeId: string;
    id: string | number;
    html: string;
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
export const $$text0 = (id: string | number): $$text0 => {
  return {
    component: {
      type: "text",
      typeId: "text0", // 用于区分使用哪套模板
      id, // 用于辨析 富文本的id
      html:
        '<p style="text-align:center;"><span style="font-size:20px">文本组件</span></p><p style="text-align:center;"><span style="font-size:16px">填充合适的文案可以显著树立公司品牌</span></p>',
      // 为拖动提供数据集，一般情况下不使用
      width: 150,
      height: 100,
      top: 0,
      left: 0
    },
    style: {
      marginTop: 0,
      marginBottom: 8,
      paddingTop: 16,
      paddingBottom: 16,
      height: 120,
      bgColor: "#fff",
      bgImg: "",
      paddingLeft: 0,
      paddingRight: 0
    }
  };
};

interface IProps {
  data: $$text0["component"];
  absolute?: boolean;
  theme?: string;
}
export default memo((props: IProps) => {
  const { data } = props;
  const { width, height, html } = data;
  const styles = css`
    white-space: pre-wrap;
    width: ${props.absolute ? width : ""}px;
    height: ${props.absolute ? height : ""}px;
    p {
      margin: 0;
    }
  `;

  return <div css={styles} dangerouslySetInnerHTML={{ __html: html }} />;
});
