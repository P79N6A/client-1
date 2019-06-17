import React, { memo, useState } from "react";
import { Layout, Menu } from "antd";
import { css } from "@emotion/core";
import ShopList from "./ShopList";

/**
 * @description 店铺
 * 针对提供的侧边功能，进行内容显示
 * 建议
 * 除非繁琐操作，则将页面尽量集成界面中，提高体验
 */
export default memo(() => {
  // 控制当前需要显示的帮助内容Key 类型
  const [contentType, setContentType] = useState("1");

  // content 内容列表
  const contentItem: { [id: string]: object } = {
    1: <ShopList />
  };

  const styles = {
    desc: css`
      padding: 0 24px;
      min-height: 200px;
    `
  };

  return (
    <Layout>
      <Layout.Sider width={180}>
        <Menu
          mode="inline"
          style={{ height: "100%" }}
          selectedKeys={[contentType]}
          onClick={({ key }) => setContentType(key)}
        >
          <Menu.Item key="1">店铺管理</Menu.Item>
          <Menu.Item key="2" disabled={true}>
            店铺检测
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content css={styles.desc}>
        {contentItem[contentType]}
      </Layout.Content>
    </Layout>
  );
});
