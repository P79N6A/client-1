import React, { Fragment, memo } from "react";
import { Icon, Layout } from "antd";
import { css } from "@emotion/core";

export default memo(() => {
  const { Header, Content, Footer } = Layout;

  const styles = {
    header: css`
      padding: 0;
      background: #fff;
      overflow: hidden;
      height: 64px;
      border: none;
    `,
    content: css`
      padding: 25px 50px;
      // 针对 ant layout 标签兼容性设置
      & > div {
        background: #fff;
        height: 100%;
        overflow: hidden;
        padding: 16px 0;
      }
      // 针对 ant layout 标签兼容性设置
      & > section {
        background: #fff;
        height: 100%;
        overflow: hidden;
        padding: 16px 0;
      }
    `,
    desc: css`
      padding: 0 24px;
      min-height: 200px;
    `,
    footer: css`
      margin: 0 0 16px;
      padding: 0 16px;
      text-align: center;
    `,
    footer_font: css`
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
    `
  };

  return (
    <Fragment>
      <Header css={styles.header} />
      <Content css={styles.content}>vip</Content>
      <Footer css={styles.footer}>
        <div css={styles.footer_font}>
          Copyright <Icon type="copyright" /> {new Date().getFullYear()}{" "}
          蜗壳云商技术部出品
        </div>
      </Footer>
    </Fragment>
  );
});
