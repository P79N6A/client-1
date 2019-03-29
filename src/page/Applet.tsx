import React, { memo, Fragment } from "react";
import { Divider, Icon, Layout, Menu } from "antd";
import { makeStyles } from "@material-ui/styles";
import { AppBar, Button, Theme, Toolbar } from "@material-ui/core";
import Logo from "../component/Logo";
import { Link } from "react-router-dom";

export default memo(() => {
  const { Header, Content, Sider } = Layout;

  // style
  const useStyles = makeStyles((theme: Theme) => ({
    // layout
    root: { height: "100vh", overflow: "hidden" },
    // header
    bar: {
      paddingLeft: 56,
      height: "64px",
      lineHeight: "64px",
      overflow: "hidden",
      background: "#fff",
      boxShadow: `${theme.shadows[0]} !important`
    },
    grow: {
      flexGrow: 1
    },
    menuSpace: {
      marginRight: theme.spacing(2)
    },
    quite: {
      marginLeft: theme.spacing(2)
    },
    icon: {
      marginRight: theme.spacing(1)
    },
    button: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "#fff"
    },
    // side
    menu: {
      position: "relative",
      zIndex: 10000,
      boxShadow: `${theme.shadows[15]} !important`
    },
    menu_item: {
      boxShadow: "none",
      height: "60px !important",
      lineHeight: 0,
      textAlign: "center",
      padding: "0 !important",

      "& i": {
        width: "100%"
      },

      "& div": {
        marginTop: "-16px"
      }
    },
    // select
    select: {},
    // edit
    edit: {},
    // content
    content: {
      padding: "16px"
    },
    canvas: {
      width: "340px",
      height: "550px",
      background: "white",
      margin: "auto",
      marginTop: "100px"
    }
  }));
  const classes = useStyles();

  // side item data
  const item: Array<{ type: string; icon: object; desc: string }> = [
    { desc: "文本", icon: <Icon type="font-colors" />, type: "text" },
    { desc: "按钮", icon: <Icon type="select" />, type: "button" },
    { desc: "图片", icon: <Icon type="picture" />, type: "picture" },
    { desc: "商品", icon: <Icon type="shopping" />, type: "commodity" },
    { desc: "插件", icon: <Icon type="deployment-unit" />, type: "plugin" }
  ];

  return (
    <Fragment>
      <Sider width={80} className={classes.menu}>
        <Logo />
        <Menu theme={"dark"}>
          {item.map((data: { desc: string; icon: object; type: string }) => {
            return (
              <Menu.Item key={data.type} className={classes.menu_item}>
                {data.icon}
                <div>{data.desc}</div>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <AppBar className={classes.bar}>
            <Toolbar variant="dense" className={classes.bar}>
              <Link to={"/applet-admin"}>
                <Button className={classes.menuSpace}>
                  <Icon type="build" className={classes.icon} />
                  小程序管理
                </Button>
              </Link>
              <Button className={classes.menuSpace}>
                <Icon type="interation" className={classes.icon} />
                模板中心
              </Button>
              <Button className={classes.menuSpace}>
                <Icon type="question-circle" className={classes.icon} />
                帮助
              </Button>
              <div className={classes.grow} />
              <Button
                variant="contained"
                className={`${classes.menuSpace} ${classes.button}`}
              >
                <Icon type="bulb" className={classes.icon} />
                发布
              </Button>
              <Button className={classes.menuSpace}>
                <Icon type="eye" className={classes.icon} />
                预览
              </Button>
              <Button className={classes.menuSpace}>
                <Icon type="save" className={classes.icon} />
                保存
              </Button>
              <Divider type="vertical" style={{ color: "blue" }} />
              <Link to="/">
                <Button className={classes.quite}>
                  <Icon type="poweroff" className={classes.icon} />
                  退出
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Header>
        <Layout className={classes.content}>
          <Sider width={272} theme={"light"}>
            {/*<SelectRender type={sider} />*/}
          </Sider>
          <Content>
            <div className={classes.canvas} />
          </Content>
          <Sider width={336} theme={"light"}>
            {/*<EditRender />*/}
          </Sider>
        </Layout>
      </Layout>
    </Fragment>
  );
});
