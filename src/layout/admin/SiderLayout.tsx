import React, { useState, Fragment } from "react";
import { Menu, Icon } from "antd";
import { css, StyleSheet } from "aphrodite/no-important";

const SubMenu = Menu.SubMenu;

export default () => {
  // 存储侧边栏的选择值
  const [selectTag, setSelectTag] = useState("stock");

  // 侧边栏选中的回调
  const select = ({ key }): void => {
    setSelectTag(key);
  };

  // 样式
  const styles = StyleSheet.create({
    logo: {
      height: 32,
      background: "rgba(255,255,255,.2)",
      margin: 16
    }
  });

  return (
    <Fragment>
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
    </Fragment>
  );
};
