import React, { memo } from "react";
import { css } from "@emotion/core";
import { TextFace } from "../../../types";

interface IProps {
  buttonSource: TextFace;
  absolute?: boolean;
}
const $$text0 = (id: string | number): TextFace => {
  return {
    type: "text",
    typeId: 0, // 用于区分使用哪套模板
    id, // 用于辨析 富文本的id
    html:
      '<p style="text-align:center;"><span style="font-size:20px">文本组件</span></p><p style="text-align:center;"><span style="font-size:16px">填充合适的文案可以显著树立公司品牌</span></p>',
    // 为拖动提供数据集，一般情况下不使用
    width: 150,
    height: 100,
    top: 0,
    left: 0
  };
};
const $$textStyle0 = {
  marginTop: 0,
  marginBottom: 8,
  paddingTop: 16,
  paddingBottom: 16,
  height: 300,
  bgColor: "#fff",
  bgImg: "",
  paddingLeft: 0,
  paddingRight: 0
};

export default memo((props: IProps) => {
  // 私有属性
  const { buttonSource, absolute } = props;
  const styles = css`
    white-space: pre-wrap;
    width: ${absolute ? buttonSource.width : ""}px;
    height: ${absolute ? buttonSource.height : ""}px;
    p {
      margin: 0;
    }
  `;

  return (
    <div css={styles} dangerouslySetInnerHTML={{ __html: buttonSource.html }} />
  );
});

export { $$text0, $$textStyle0 };
