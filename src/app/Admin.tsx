import React, { memo, useState } from "react";
import { Layout, Menu, Icon, Breadcrumb } from "antd";
import { css, StyleSheet } from "aphrodite";
import Material from "./admin/Material";
import Stock from "./admin/Stock";

const { Header, Sider, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;

export default memo(() => {
  // 存储侧边栏的选择值
  const [selectTag, setSelectTag] = useState("stock");
  // 控制侧边栏的伸缩
  const [collapsed, setCollapsed] = useState(false);
  // 切换状态控制
  const toggle = (): void => {
    setCollapsed(!collapsed);
  };
  // 侧边栏断点处理
  const onBreakpoint = (broken): void => {
    broken ? setCollapsed(true) : setCollapsed(false);
  };
  // 侧边栏选中的回调
  const select = ({ key }): void => {
    setSelectTag(key);
  };
  //  侧边栏名称中英转换
  const nameTranslate = {
    // 概览
    home: ["概览"],
    // 商品栏
    stock: ["商品", "库存管理"],
    distribution: ["商品", "配送管理"],
    purchase: ["商品", "采购管理"],
    supplier: ["商品", "供应商管理"]
  };
  // 侧边栏组件集
  const contentUi = {
    // 概览
    home: "",
    // 商品栏
    stock: <Stock />,
    distribution: <Material />,
    purchase: <Material />,
    supplier: <Material />
  };
  // 样式
  const styles = StyleSheet.create({
    layout: {
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
      padding: "0 24px",
      overFlow: 'hidden',
    },
    trigger: {
      fontSize: 18,
      lineHeight: "66px",
      cursor: "pointer",
      transition: "color .3s",
      float: "left",
      ":hover": {
        color: "#1890ff"
      }
    },
    content: {
      background: "#fff",
      padding: 24,
      margin: "0 24px",
      minHeight: 280
    },
    footer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    menu: {
      float: "right",
      lineHeight: "64px"
    },
    breadcrumb: {
      margin: "16px 24px"
    }
  });

  return (
    <Layout className={css(styles.layout)}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        collapsible={true}
        collapsed={collapsed}
        onBreakpoint={onBreakpoint}
      >
        <div className={css(styles.logo)} />
        <Menu
          theme="dark"
          mode="inline"
          onSelect={select}
          defaultOpenKeys={["shop"]}
          defaultSelectedKeys={[selectTag]}
        >
          <Menu.Item key="home">
            <Icon type="home" />
            <span>概览</span>
          </Menu.Item>
          <SubMenu
            key="shop"
            title={
              <span>
                <Icon type="shop" />
                <span>商品</span>
              </span>
            }
          >
            <Menu.Item key="stock">库存管理</Menu.Item>
            <Menu.Item key="distribution">配送管理</Menu.Item>
            <Menu.Item key="purchase">采购管理</Menu.Item>
            <Menu.Item key="supplier">供货商管理</Menu.Item>
          </SubMenu>
          <Menu.Item key="calendar">
            <Icon type="calendar" />
            <span>订单</span>
          </Menu.Item>
          <Menu.Item key="team">
            <Icon type="team" />
            <span>客户</span>
          </Menu.Item>
          <Menu.Item key="money-collect">
            <Icon type="money-collect" />
            <span>资产</span>
          </Menu.Item>
          <Menu.Item key="deployment-unit">
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
          <Menu mode="horizontal" className={css(styles.menu)}>
            <Menu.Item key="2">使用帮助</Menu.Item>
            <Menu.Item key="3">信息</Menu.Item>
            <Menu.Item key="3">用户头像</Menu.Item>
          </Menu>
        </Header>
        <Breadcrumb className={css(styles.breadcrumb)}>
          <Breadcrumb.Item>
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item>{nameTranslate[selectTag][0]}</Breadcrumb.Item>
          <Breadcrumb.Item>{nameTranslate[selectTag][1]}</Breadcrumb.Item>
        </Breadcrumb>
        <Content className={css(styles.content)}>
          {contentUi[selectTag]}
        </Content>
        <Footer className={css(styles.footer)}>footer</Footer>
      </Layout>
    </Layout>
  );
});
