import React, { memo } from "react";
import { Layout } from "antd";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ApSider from "./part/ApSider";
import ApSiderContent from "./part/ApSiderContent";
import ApCanvas from "./part/ApCanvas";
import ApEdit from "./part/ApEdit";

/**
 * 样式及antd 组件解析
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
    background: "#fff !important",
    height: "50px !important"
  },
  side: {
    background: "transparent !important"
  }
}));

/**
 * 小程序制作页 布局
 * 功能
 * 1. 页面布局
 * 2. 功能模块引入
 * 3. state 状态交给redux控制
 */
export default memo(() => {
  const classes = useStyles();

  return (
    <Layout className={classes.layout}>
      <Header className={classes.header}>
        <AppBar position={"fixed"}>
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" noWrap>
              Logo
            </Typography>
          </Toolbar>
        </AppBar>
      </Header>
      <Layout>
        <Sider width={80} theme={"light"}>
          <ApSider />
        </Sider>
        <Sider width={320} theme={"light"} className={classes.side}>
          <ApSiderContent />
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
