import { css } from "@emotion/core";
import React, { memo } from "react";

const Logo = memo(() => {
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

export default Logo;
