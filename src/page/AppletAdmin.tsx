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

    // content
    content: {
      padding: "16px"
    }
  }));
  const classes = useStyles();

  // side item data
  const item: Array<{ type: string; icon: object; desc: string }> = [
    { desc: "文章", icon: <Icon type="select" />, type: "button" },
    { desc: "表单", icon: <Icon type="picture" />, type: "picture" }
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
            <Toolbar variant="dense" className={classes.bar} />
          </AppBar>
        </Header>
        <Layout className={classes.content}>
          <Sider width={272} theme={"light"}>
            {/*<SelectRender type={sider} />*/}
          </Sider>
          <Content />
        </Layout>
      </Layout>
    </Fragment>
  );
});
