import { Layout, Menu } from "antd";
import React, { Fragment, memo } from "react";

const AdminStorage = memo(() => {
  const { Sider } = Layout;
  return (
    <Fragment>
      <Sider width={168}>
        <Menu mode="inline" selectedKeys={["1"]} style={{ height: "100%" }}>
          <Menu.Item key="1">管理</Menu.Item>
          <Menu.Item key="1">配送</Menu.Item>
          <Menu.Item key="1">供货商</Menu.Item>
        </Menu>
      </Sider>
    </Fragment>
  );
});

export default AdminStorage;
