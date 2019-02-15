/** @jsx jsx */
import { memo } from "react";
import { connect } from "react-redux";
import { jsx, css } from "@emotion/core";
import { Layout } from "antd";

/**
 * @description admin 页面
 * 功能
 * 1. 页面布局 ✅
 * 2. 底部版权信息 🚧
 */
export default memo(() => {
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
      {/*<SidePart />*/}
      <Layout>
        <Header css={style.header}>{/*<HeaderPart/>*/}</Header>
        <Content css={style.content}>{/*<ContentPart/>*/}</Content>
        <Footer css={style.footer}>
          Copyright © 2018-{new Date().getFullYear()} 蚂蚁金服 All Rights
          Reserved.
          <p>备案号：苏ICP备15012807号-1</p>
        </Footer>
      </Layout>
    </Layout>
  );
});
