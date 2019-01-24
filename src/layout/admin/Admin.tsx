import { connect } from "react-redux";
import styled from "styled-components";
import React, { memo, Fragment, useState } from "react";
import { Icon, Layout, Breadcrumb } from "antd";
import HeaderPart from "./HeaderPart";
import SidePart from "./SidePart";
import MbSidePart from "./MbSidePart";
import ContentPart from "./ContentPart";

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
  // 侧边栏
  const { Sider } = Layout;
  //  sider 配置
  const siderConfig: {} = {
    collapsed: lg || collapsed,
    onBreakpoint: onBreakpoint,
    breakpoint: "lg",
    collapsedWidth: "0",
    trigger: null,
    collapsible: true
  };

  return (
    <Fragment>
      <AdminStyle>
        <Sider {...siderConfig}>
          <SidePart />
        </Sider>
        <Layout>
          <HeaderStyle>
            <HeaderPart toggle={toggle} collapsed={collapsed} />
          </HeaderStyle>
          <MainStyle>
            <BreadcrumbStyle>
              <Breadcrumb.Item>
                <Icon type="home" />
              </Breadcrumb.Item>
            </BreadcrumbStyle>
            <ContentStyle>
              <ContentPart />
            </ContentStyle>
            <FooterStyle>Copyright 2018 蚂蚁金服体验技术部出品</FooterStyle>
          </MainStyle>
        </Layout>
      </AdminStyle>
      <MbSidePart collapsed={lg && collapsed} toggle={toggle} />
    </Fragment>
  );
});

/**
 * @description style
 */
const AdminStyle = styled(Layout)`
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
  clear: both;
`;
const HeaderStyle = styled(Layout.Header)`
  background: #fff !important;
  padding: 0 24px !important;
  overflow: hidden;
  clear: both;
`;
const BreadcrumbStyle = styled(Breadcrumb)`
  margin: 16px 24px !important;
`;
const MainStyle = styled.div`
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;
const ContentStyle = styled.div`
  background: #fff;
  padding: 24px;
  margin: 0 24px;
`;
const FooterStyle = styled.div`
  text-align: center;
  background: #f0f2f5;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  padding: 24px;
`;
