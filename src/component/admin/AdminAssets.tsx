import { Layout, Menu } from "antd";
import React, { Fragment, memo } from "react";

const AdminAssets = memo(() => {
  const { Sider } = Layout;
  return (
    <Fragment>
      <Sider width={168}>
        <Menu mode="inline" selectedKeys={["1"]} style={{ height: "100%" }}>
          <Menu.Item key="1">账户总览</Menu.Item>
          <Menu.Item key="2">店铺余额</Menu.Item>
          <Menu.Item key="3">资金对账</Menu.Item>
        </Menu>
      </Sider>
    </Fragment>
  );
});

export default AdminAssets;
