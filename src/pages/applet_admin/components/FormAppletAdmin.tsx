import React, { memo } from "react";
import { Icon, Layout } from "antd";
import { css } from "@emotion/core";

export default memo(() => {
  const { Content, Footer } = Layout;

  const styles = {
    content: css`
      height: 100%;
      padding: 18px;
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

  // 根据指定类型展示相应帮助内容
  // const content: { [name: string]: object } = {
  //   applet: <AppletMadeHelp />
  // };

  return (
    <Layout style={{ height: "100%" }}>
      <Content css={styles.content}>
        <Layout>
          <Content css={styles.desc}>form</Content>
        </Layout>
      </Content>
      <Footer css={styles.footer}>
        <div css={styles.footer_font}>
          Copyright <Icon type="copyright" /> 2018 蚂蚁金服体验技术部出品
        </div>
      </Footer>
    </Layout>
  );
});
