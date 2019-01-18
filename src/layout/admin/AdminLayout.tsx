import React, { memo, useState } from "react";
import { Icon, Layout, Breadcrumb, Col, Row } from "antd";
import styled from "styled-components";
import HeaderLayout from "./HeaderLayout";
import SiderLayout from "./SiderLayout";
import Stock from "../../app/admin/stock/Stock";
import Supplier from "../../app/admin/supplier/Supplier";
import Purchase from "../../app/admin/purchase/Purchase";
import Distribution from "../../app/admin/distribution/Distribution";
import MobileSiderLayout from "./MobileSiderLayout";

const { Header, Sider } = Layout;
// 样式
const LayoutStyle = styled(Layout)`
  height: 100vh;
`;
const HeaderStyle = styled(Header)`
  background: #fff !important;
  width: 100% !important;
  padding: 0 24px !important;
`;
const BreadcrumbStyle = styled(Breadcrumb)`
  margin: 16px 24px !important;
`;
const MainStyle = styled.div`
  height: calc(100vh - 68px) !important;
  overflow-x: hidden !important;
  overflow-y: auto !important;
`;
const ContentStyle = styled.div`
  background: #fff;
  padding: 24px;
  margin: 0 24px;
  height: auto;
  min-height: calc(100vh - 187px);
`;
const FooterStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f2f5;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  padding: 24px;
`;

export default memo(() => {
  // 控制侧边栏的伸缩
  const [collapsed, setCollapsed] = useState(false);
  const [pcCollapsed, setPcCollapsed] = useState(false);
  // 切换状态控制
  const toggle = (): void => {
    setCollapsed(!collapsed);
  };
  // 手机端状态切换
  const mbToggle = (): void => {
    setPcCollapsed(!pcCollapsed);
  };
  // 侧边栏断点处理
  const onBreakpoint = (broken): void => {
    if (broken) {
      setCollapsed(true);
      setPcCollapsed(false);
    } else {
      setCollapsed(false);
      setPcCollapsed(false);
    }
  };

  return (
    <LayoutStyle>
      <Sider
        collapsed={collapsed}
        onBreakpoint={onBreakpoint}
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        collapsible={true}
      >
        <SiderLayout/>
      </Sider>
      <MobileSiderLayout mbToggle={mbToggle} collapsed={pcCollapsed}/>
      <Layout>
        <HeaderStyle>
          <HeaderLayout
            toggle={toggle}
            mbToggle={mbToggle}
            collapsed={collapsed}
          />
        </HeaderStyle>
        <BreadcrumbStyle>
          <Breadcrumb.Item>
            <Icon type="home"/>
          </Breadcrumb.Item>
        </BreadcrumbStyle>
        <MainStyle>
          <ContentStyle>
            {/*<Stock/>*/}
            {/*<Supplier/>*/}
            {/*<Purchase />*/}
            {/*<Distribution />*/}
          </ContentStyle>
          <FooterStyle>Copyright 2018 蚂蚁金服体验技术部出品</FooterStyle>
        </MainStyle>
      </Layout>
    </LayoutStyle>
  );
});
