import React, { memo } from "react";
import { css } from "@emotion/core";
import IconFont from "./IconFont";

const Logo: React.FC = memo(() => {
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
      <IconFont type="icon-logo" style={{ fontSize: 45 }} />
    </div>
  );
});

export default Logo;
