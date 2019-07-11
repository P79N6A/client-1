import React, { memo, useState } from "react";
import { Layout, Menu } from "antd";
import { css } from "@emotion/core";
import Manage from "./WareManage";
import WareAdd from "./WareAdd";

export default memo(() => {
  // 控制当前需要显示的帮助内容Key 类型
  const [contentType, setContentType] = useState("manage");

  // 根据指定类型展示相应帮助内容
  const contentItem: { [name: string]: object } = {
    manage: <Manage />,
    add: <WareAdd />
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
          <Menu.Item key="manage">商品管理</Menu.Item>
          <Menu.Item key="add">商品添加</Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content css={styles.desc}>
        {contentItem[contentType]}
      </Layout.Content>
    </Layout>
  );
});
