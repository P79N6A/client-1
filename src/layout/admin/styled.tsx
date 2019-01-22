import styled from "styled-components";
import { Breadcrumb, Layout } from "antd";

/**
 * AdminLayout 界面用到的样式
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
const Logo = styled.div`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`;

const HeaderLayoutStyle = styled.div`
  & > ul {
    line-height: 64px;
    float: right;
  }
  & > span {
    font-size: 18px;
    line-height: 66px;
    cursor: pointer;
    transition: color 0.3s;
    float: left;
    &:hover {
      color: #1890ff;
    }
  }
  & > div {
    height: 60px;
    float: right;
    align-items: center;
  }
`;
export {
  AdminStyle,
  HeaderStyle,
  BreadcrumbStyle,
  MainStyle,
  ContentStyle,
  FooterStyle,
  HeaderLayoutStyle,
  Logo
};
