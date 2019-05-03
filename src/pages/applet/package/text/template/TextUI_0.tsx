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
      '<p style="text-align:center;">请在这里填充文本</p><p style="text-align:center;">这里是示例文本，这里是示例文本</p><p style="text-align:center;">这里是示例文本，这里是示例文本</p><p style="text-align:center;">这里是示例文本，这里是示例文本</p><p style="text-align:center;">这里是示例文本，这里是示例文本</p><p style="text-align:center;">这里是示例文本，这里是示例文本</p><p style="text-align:center;">这里是示例文本，这里是示例文本</p>',
    // 为拖动提供数据集，一般情况下不使用
    width: 150,
    height: 100,
    top: 0,
    left: 0
  };
};
const $$textStyle0 = {
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 10,
  paddingBottom: 10,
  height: 300,
  bgColor: "",
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
