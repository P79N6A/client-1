import React, { memo } from "react";
import { Layout } from "antd";
import styles from "./home.module.scss";

export default memo(() => {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout tagName={"main"} className={styles.layout}>
      <Header tagName={"header"}>Header</Header>
      <Content tagName={"main"}>Content</Content>
      <Footer tagName={"footer"}>Footer</Footer>
    </Layout>
  );
});
