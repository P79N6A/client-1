import React, { memo } from "react";
import { Layout } from "antd";
import { makeStyles } from "@material-ui/styles";
// Layout
import ApHeader from "./layout/lazy/ApHeader";
import ApCanvas from "./layout/lazy/ApCanvas";
import ApSelect from "./layout/lazy/ApSelect";
import ApEdit from "./layout/lazy/ApEdit";
import ApSider from "./layout/lazy/ApSider";

/**
 * Styles and Deconstruction
 */
const { Header, Sider, Content } = Layout;
const useStyles = makeStyles(() => ({
  layout: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    minWidth: "1100px",
    minHeight: "900px"
  },
  header: {
    background: `transparent !important`
  },
  side: {
    background: "transparent !important",
    position: "relative"
  }
}));

/**
 * applet made page
 * features
 * 1. layout
 * 2. state controller
 */
export default memo(() => {
  const classes = useStyles();

  return (
    <Layout className={classes.layout}>
      <Header className={classes.header}>
        <ApHeader />
      </Header>
      <Layout>
        <Sider width={80} theme={"light"}>
          <ApSider />
        </Sider>
        <Sider width={320} theme={"light"} className={classes.side}>
          <ApSelect />
        </Sider>
        <Content>
          <ApCanvas />
        </Content>
        <Sider width={350} theme={"light"} className={classes.side}>
          <ApEdit />
        </Sider>
      </Layout>
    </Layout>
  );
});
