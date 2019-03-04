import React, { memo } from "react";
import { Layout } from "antd";

import SiderAdmin from "./SiderAdmin";

import styles from "./admin.module.scss";
import HeaderAdmin from "./HeaderAdmin";

export default memo(() => {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <Layout tagName={"main"} className={styles.layout}>
      <SiderAdmin />
      <Layout tagName={"main"}>
        <Header tagName={"header"} className={styles.header}>
          <HeaderAdmin />
        </Header>
        <Content tagName={"main"}>Content</Content>
        <Footer tagName={"footer"}>Footer</Footer>
      </Layout>
    </Layout>
  );
});
