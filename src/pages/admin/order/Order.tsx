import React, { memo, useState } from "react";
import {  Layout, Menu } from "antd";
import { css } from "@emotion/core";
import OrderComplete from "./OrderComplete";
import OrderShip from "./OrderShip";
import OrderReturn from "./OrderReturn";

export default memo(() => {
  // 控制当前需要显示的帮助内容Key 类型
  const [contentType, setContentType] = useState("complete");

  // 根据指定类型展示相应帮助内容
  const contentItem: { [name: string]: object } = {
    complete: <OrderComplete />,
    ship: <OrderShip />,
    return: <OrderReturn />
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
          style={{ height: "100%" }}
          mode="inline"
          selectedKeys={[contentType]}
          onClick={({ key }) => setContentType(key)}
        >
          <Menu.Item key="complete">已完成</Menu.Item>
          <Menu.Item key="ship">待发货</Menu.Item>
          <Menu.Item key="return">待退货</Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout.Content css={styles.desc}>
        {" "}
        {contentItem[contentType]}
      </Layout.Content>
    </Layout>
  );
});
