/** @jsx jsx */
import { connect } from "react-redux";
import { jsx, css } from "@emotion/core";
import React, { memo, Fragment, useState } from "react";
import { Icon, Layout, Breadcrumb } from "antd";
import HeaderPart from "../containers/admin/HeaderPart";
import SidePart from "../containers/admin/SidePart";
import MbSidePart from "../containers/admin/MbSidePart";
import ContentPart from "../containers/admin/ContentPart";

/**
 * @description admin 页面
 * 功能
 * 1. 页面布局
 * 2. 侧边栏动画（电脑端与手机端）
 */
export default memo(() => {
  // 记录当前屏幕,用意控制侧边栏
  const [lg, setLg] = useState(false);
  // 控制侧边栏的伸缩
  const [collapsed, setCollapsed] = useState(false);
  // 切换状态控制
  const toggle = (): void => {
    setCollapsed(!collapsed);
  };
  // 侧边栏断点处理
  const onBreakpoint = (broken): void => {
    // size > lg => false   size < lg  => true
    setLg(broken);
  };
  // antd 组件解构
  const { Sider, Header } = Layout;
  //  sider 配置
  const siderConfig: {} = {
    collapsed: lg || collapsed,
    onBreakpoint: onBreakpoint,
    breakpoint: "lg",
    collapsedWidth: "0",
    trigger: null,
    collapsible: true
  };

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
    breadcrumb: css`
      margin: 16px 24px !important;
    `,
    main: css`
      overflow-x: hidden !important;
      overflow-y: auto !important;
    `,
    content: css`
      background: #fff;
      padding: 24px;
      margin: 0 24px;
    `,
    footer: css`
      text-align: center;
      background: #f0f2f5;
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
      padding: 24px;
    `
  };
  return (
    <Fragment>
      <Layout css={style.layout}>
        <Sider {...siderConfig}>
          <SidePart />
        </Sider>
        <Layout>
          <Header css={style.header}>
            <HeaderPart toggle={toggle} collapsed={collapsed} />
          </Header>
          <div css={style.main}>
            <Breadcrumb
              css={style.breadcrumb}
              linkRender={() => ""}
              nameRender={() => ""}
            >
              <Breadcrumb.Item>
                <Icon type="home" />
              </Breadcrumb.Item>
            </Breadcrumb>
            <div css={style.content}>
              <ContentPart />
            </div>
            <div css={style.footer}>Copyright 2018 蚂蚁金服体验技术部出品</div>
          </div>
        </Layout>
      </Layout>
      <MbSidePart collapsed={lg && collapsed} toggle={toggle} />
    </Fragment>
  );
});
