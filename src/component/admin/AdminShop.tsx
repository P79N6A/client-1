import { Layout, Menu } from "antd";
import React, { Fragment, memo } from "react";

const AdminShop = memo(() => {
  const { Sider } = Layout;
  return (
    <Fragment>
      <Sider width={168}>
        <Menu mode="inline" selectedKeys={["1"]} style={{ height: "100%" }}>
          <Menu.Item key="1">装修</Menu.Item>
          <Menu.Item key="2">模板</Menu.Item>
          <Menu.Item key="3">检测</Menu.Item>
        </Menu>
      </Sider>
    </Fragment>
  );
});

export default AdminShop;
