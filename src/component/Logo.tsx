import { css } from "@emotion/core";
import React, { memo } from "react";
import { Icon } from "antd";

const Logo = memo(() => {
  // 样式
  const styles = {
    logo: css`
      height: 32px;
      width: 80px;
      text-align: center;
      font-size: 40px;
      margin-bottom: 28px;
    `
  };

  return (
    <div css={styles.logo}>
      <Icon type="amazon" />
    </div>
  );
});

export default Logo;
