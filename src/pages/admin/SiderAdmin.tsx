import React, { memo, useState } from "react";
import { Icon, Layout, Menu } from "antd";
import styles from "./admin.module.scss";

export default memo(() => {
  const [collapse, setCollapse] = useState(false);
  const { Sider } = Layout;
  const onCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <Sider collapsible collapsed={collapse} onCollapse={onCollapse}>
      <div className={styles.logo} />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>Option 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="desktop" />
          <span>Option 2</span>
        </Menu.Item>
        <Menu.Item key="9">
          <Icon type="file" />
          <span>File</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
});
