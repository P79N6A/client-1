/** @jsx jsx
 *  @description 小程序制作页
 *  @author 陈迎
 *  功能及完成度
 * */
import React, { memo } from "react";
import { css, jsx } from "@emotion/core";
export default memo(() => {
  // 样式
  const styles = {
    logo: css`
      height: 32px;
      background: rgba(255, 255, 255, 0.2);
      margin: 16px;
    `
  };

  return <div css={styles.logo} />;
});
