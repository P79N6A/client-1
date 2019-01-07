import React, { memo, useState } from "react";
import { Layout, Menu, Icon } from "antd";
import { css, StyleSheet } from "aphrodite";
import Material from "./admin/Material";

export default memo(() => {
  const [collapsed, setCollapsed] = useState(false);

  const { Header, Sider, Content } = Layout;

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const styles = StyleSheet.create({
    layout: {
      width: "100%",
      height: "100vh",
      overFlow: "hidden"
    },
    logo: {
      height: 32,
      background: "rgba(255,255,255,.2)",
      margin: 16
    },
    header: {
      background: "#fff",
      padding: 0
    },
    trigger: {
      fontSize: 18,
      padding: "0 24px",
      cursor: "pointer",
      transition: "color .3s",
      color: "black",
      ":hover": {
        color: "#1890ff"
      }
    },
    content: {
      margin: "24px 16px",
      padding: 24,
      background: "#fff",
      minHeight: 280
    }
  });

  return (
    <Layout className={css(styles.layout)}>
      <Sider trigger={null} collapsible={true} collapsed={collapsed}>
        <div className={css(styles.logo)} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">
            <Icon type="home" />
            <span>首页</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="shop" />
            <span>商品</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="calendar" />
            <span>订单</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="team" />
            <span>客户</span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="money-collect" />
            <span>资产</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="deployment-unit" />
            <span>营销</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className={css(styles.header)}>
          <Icon
            className={css(styles.trigger)}
            type={collapsed ? "menu-unfold" : "menu-fold"}
            onClick={toggle}
          />
        </Header>
        <Content className={css(styles.content)}>
          <Material />
        </Content>
      </Layout>
    </Layout>
  );
});
