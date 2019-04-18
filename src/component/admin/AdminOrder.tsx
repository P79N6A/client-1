import { Layout, Menu } from "antd";
import React, { Fragment, memo } from "react";

const AdminOrder = memo(() => {
  const { Sider } = Layout;
  return (
    <Fragment>
      <Sider width={168}>
        <Menu mode="inline" selectedKeys={["1"]} style={{ height: "100%" }}>
          <Menu.Item key="1">管理</Menu.Item>
          <Menu.Item key="2">待发货</Menu.Item>
          <Menu.Item key="2">待退货</Menu.Item>
          <Menu.Item key="3">已完成</Menu.Item>
        </Menu>
      </Sider>
    </Fragment>
  );
});

export default AdminOrder;
