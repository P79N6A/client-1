import React, { memo } from "react";
import { css } from "@emotion/core";
import { TextFace } from "../../../types";

interface IProps {
  buttonSource: TextFace;
  absolute?: boolean;
}

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
