/** @jsx jsx */
import React, { Fragment, memo, useState } from "react";
import { Menu, Icon, Layout } from "antd";
import { connect } from "react-redux";
import { jsx, css } from "@emotion/core";
import { IRedux } from "../../typing/redux";
import { rxAction } from "../../redux/action";

/**
 * @description 引用store 中的数据
 * @param state
 */
const rxProps = state => {
  return {
    admin: state.admin
  };
};

/**
 * @description admin 侧边栏
 * 功能
 * 1. 侧边栏选择值同步至redux
 */
export default connect(
  rxProps,
  { rxAction }
)(
  memo((props: IRedux) => {
    const { rxAction, admin } = props;
    // 控制侧边栏的伸缩
    const [collapsed, setCollapsed] = useState(false);

    // 切换状态控制
    const toggle = (): void => {
      setCollapsed(!collapsed);
    };

    //  sider 配置
    const siderConfig: {} = {
      collapsed: collapsed,
      collapsible: true,
      onCollapse: toggle
    };

    // 侧边栏选中的回调
    const select = (param: { key: string }): void => {
      rxAction("ADMIN_SIDER_SELECT", param.key);
    };

    // 样式
    const style = {
      logo: css`
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
      `
    };
    return (
      <Layout.Sider {...siderConfig}>
        <div css={style.logo} />
        <Menu
          theme="dark"
          mode="inline"
          onSelect={select}
          defaultSelectedKeys={[admin.siderSelect]}
        >
          <Menu.Item key="dashboard">
            <Icon type="dashboard" />
            <span>概览</span>
          </Menu.Item>
          <Menu.Item key="shop">
            <Icon type="shop" />
            <span>店铺</span>
          </Menu.Item>
          <Menu.SubMenu
            key="cargo-manage"
            title={
              <span>
                <Icon type="shopping-cart" />
                <span>商品</span>
              </span>
            }
          >
            <Menu.Item key="cargo">商品管理</Menu.Item>
            <Menu.Item key="delivery">配送管理</Menu.Item>
            <Menu.Item key="supply">供货商管理</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="order-manage"
            title={
              <span>
                <Icon type="calendar" />
                <span>订单</span>
              </span>
            }
          >
            <Menu.Item key="order-search">订单查询</Menu.Item>
            <Menu.Item key="order">订单处理</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="user-manage"
            title={
              <span>
                <Icon type="team" />
                <span>客户</span>
              </span>
            }
          >
            <Menu.Item key="user">客户管理</Menu.Item>
            <Menu.Item key="vip">会员卡管理</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="assets-manage"
            title={
              <span>
                <Icon type="money-collect" />
                <span>资产</span>
              </span>
            }
          >
            <Menu.Item key="assets">我的资产</Menu.Item>
            <Menu.Item key="reconciliation">资产对账</Menu.Item>
          </Menu.SubMenu>
          <Menu.SubMenu
            key="analysis-manage"
            title={
              <span>
                <Icon type="dot-chart" />
                <span>数据</span>
              </span>
            }
          >
            <Menu.Item key="user=analysis">用户数据</Menu.Item>
            <Menu.Item key="order-analysis">订单数据</Menu.Item>
            <Menu.Item key="spread-analysis">推广分析</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="spread">
            <Icon type="deployment-unit" />
            <span>营销</span>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
    );
  })
);
