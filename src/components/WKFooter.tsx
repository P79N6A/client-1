import React, { memo } from "react";
import { css } from "@emotion/core";
import { Icon, Layout } from "antd";

/**
 * @description 页脚
 */
export default memo(() => {
  // 样式
  const styles = {
    layout_footer: css`
      margin: 48px 0 24px;
      padding: 0 16px;
      text-align: center;
    `,
    footer_margin: css`
      margin-bottom: 8px;
      & > a {
        text-align: center;
        margin: 20px;
        text-decoration: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.45);
        transition: all 0.3s;
        touch-action: manipulation;
      }
    `,
    footer_font: css`
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
    `
  };

  return (
    <Layout.Footer css={styles.layout_footer}>
      <div css={styles.footer_margin}>
        <a title="help" target="_self" href="/">
          帮助
        </a>
        <a title="privacy" target="_self" href="/">
          隐私
        </a>
        <a title="terms" target="_self" href="/">
          条款
        </a>
      </div>
      <div css={styles.footer_font}>
        Copyright <Icon type="copyright" /> {new Date().getFullYear()}&nbsp;
        蜗壳云商技术部出品
      </div>
    </Layout.Footer>
  );
});
