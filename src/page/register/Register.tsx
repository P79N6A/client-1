import React, { memo } from "react";
import { css } from "@emotion/core";
import { Layout } from "antd";
import IconFont from "../../components/IconFont";
import WKFooter from "../../components/WKFooter";
import RegisterForm from "./RegisterForm";

/**
 * @description 注册页

 */
export default memo(() => {
  // 样式
  const styles = {
    layout: css`
      background-image: url(https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg);
      background-repeat: no-repeat;
      background-position: center 110px;
      background-size: 100%;
      padding-top: 64px;
    `,

    layout_content: css`
      margin: auto auto;
    `,
    content_logo: css`
      text-align: center;
      height: 44px;
      line-height: 44px;
      & > a > i {
        height: 44px;
        margin-right: 16px;
        vertical-align: top;
      }
      & > a > span {
        position: relative;
        top: 2px;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 600;
        font-size: 33px;
        font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      }
    `,
    content_font: css`
      text-align: center;
      margin-top: 12px;
      margin-bottom: 40px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
    `
  };

  return (
    <Layout css={styles.layout}>
      <Layout.Content css={styles.layout_content}>
        <div css={styles.content_logo}>
          <a href="/">
            <IconFont type={"icon-logo"} style={{ fontSize: 48 }} />
            <span>蜗壳云商</span>
          </a>
        </div>
        <div css={styles.content_font}>蜗壳云商是国内一流的商户saas提供商</div>
        <h3 style={{ float: "left" }}>注册</h3>
        <RegisterForm />
      </Layout.Content>
      <WKFooter />
    </Layout>
  );
});
