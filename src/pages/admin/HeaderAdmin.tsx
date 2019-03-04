import React, { memo } from "react";
import { Menu } from "antd";
import styles from "./admin.module.scss";

export default memo(() => {
  return (
    <Menu mode="horizontal" className={styles.header_menu}>
      <Menu.Item key="mail">Navigation One</Menu.Item>
      <Menu.Item key="mails">Navigation One</Menu.Item>
      <Menu.Item key="mailss">Navigation One</Menu.Item>
    </Menu>
  );
});
