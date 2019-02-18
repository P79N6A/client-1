import * as React from "react";
import { Layout } from "antd";
import { css } from "@emotion/core";
import AdminSider from "./AdminSider";

/**
 * @description admin 页面
 * 功能
 * 1. 页面布局 ✅
 * 2. 底部版权信息 🚧
 */
export default React.memo(() => {
  // antd 组件解构
  const { Header, Content, Footer } = Layout;
  // 样式
  const style = {
    layout: css`
      height: 100vh;
      box-sizing: border-box;
      overflow: hidden;
      clear: both;
    `,
    header: css`
      background: #fff !important;
      padding: 0 24px !important;
      overflow: hidden;
      clear: both;
    `,
    content: css`
      margin: 18px;
      padding: 6px;
    `,
    footer: css`
      text-align: center;
      align-items: center;
      background: #f0f2f5;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
    `
  };

  return (
    <Layout css={style.layout}>
      <AdminSider />
      <Layout>
        <Header css={style.header} />
        <Content css={style.content} />
        <Footer css={style.footer}>
          Copyright © 2018-{new Date().getFullYear()} 蚂蚁金服 All Rights
          Reserved. 备案号：苏ICP备15012807号-1
        </Footer>
      </Layout>
    </Layout>
  );
});
