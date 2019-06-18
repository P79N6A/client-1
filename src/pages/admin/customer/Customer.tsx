import React, { memo, useState } from "react";
import { Layout, Menu } from "antd";
import { css } from "@emotion/core";
import CustomerManage from "./CustomerManage";

export default memo(() => {
  // 控制当前需要显示的帮助内容Key 类型
  const [contentType, setContentType] = useState("manage");

  const styles = {
    desc: css`
      padding: 0 24px;
      min-height: 200px;
    `
  };

  // 根据指定类型展示相应帮助内容
  const contentItem: { [name: string]: object } = {
    manage: <CustomerManage />
  };

  return (
    <Layout>
      <Layout.Sider width={180}>
        <Menu
          style={{ height: "100%" }}
          mode="inline"
          selectedKeys={[contentType]}
          onClick={({ key }) => setContentType(key)}
        >
          <Menu.Item key="manage">客户管理</Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content css={styles.desc}>
        {contentItem[contentType]}
      </Layout.Content>
    </Layout>
  );
});
