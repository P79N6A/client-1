import React, { memo, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Layout, Menu } from "antd";
import { makeStyles } from "@material-ui/styles";
import { Button, Theme, Toolbar } from "@material-ui/core";

import Logo from "../component/Logo";
import SideRender from "../package/applet-made/SideRender";
import EditRender from "../package/applet-made/EditRender";

export default memo(() => {
  // antd 组件解构
  const { Header, Content, Sider } = Layout;

  // 样式
  const useStyles = makeStyles((theme: Theme) => ({
    // layout
    root: { height: "100vh", overflow: "hidden" },
    // header
    header: {
      padding: 0
    },
    bar: {
      height: "64px",
      lineHeight: "64px",
      overflow: "hidden",
      background: "transparent"
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
      width: 20,
      height: 20,
      marginRight: theme.spacing(1)
    },
    button: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      borderRadius: 3,
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "#fff"
    },
    divider: {
      background: "red !important"
    },
    // side
    side: {
      position: "relative",
      zIndex: theme.zIndex.appBar + 1,
      boxShadow: theme.shadows[15],
      background: "#273543"
    },
    side_icon: {
      width: 21,
      height: 21,
      verticalAlign: "-0.15em",
      fill: "currentColor",
      overflow: "hidden"
    },
    side_item: {
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
      padding: "24px"
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

  // side menu 数据记录，默认 text
  const [side, setSide] = useState("text");
  const changeSide = ({ key }: { key: string }): void => {
    setSide(key);
  }; //menu item 点击时回调
  const item: Array<{ type: string; icon: object; desc: string }> = [
    {
      desc: "文本",
      icon: (
        <svg className={classes.side_icon} aria-hidden="true">
          <use xlinkHref="#iconfile" />
        </svg>
      ),
      type: "text"
    },
    {
      desc: "按钮",
      icon: (
        <svg className={classes.side_icon} aria-hidden="true">
          <use xlinkHref="#iconanniu" />
        </svg>
      ),
      type: "button"
    },
    {
      desc: "图片",
      icon: (
        <svg className={classes.side_icon} aria-hidden="true">
          <use xlinkHref="#icontupian" />
        </svg>
      ),
      type: "picture"
    },
    {
      desc: "商品",
      icon: (
        <svg className={classes.side_icon} aria-hidden="true">
          <use xlinkHref="#iconshangpin" />
        </svg>
      ),
      type: "commodity"
    },
    {
      desc: "插件",
      icon: (
        <svg className={classes.side_icon} aria-hidden="true">
          <use xlinkHref="#iconxingzhuanggongnengtubiao-" />
        </svg>
      ),
      type: "plugin"
    }
  ]; // 侧边项 数据

  return (
    <Fragment>
      <Sider width={80} className={classes.side}>
        <Logo />
        <Menu theme={"dark"} selectedKeys={[side]} onClick={changeSide}>
          {item.map((data: { desc: string; icon: object; type: string }) => {
            return (
              <Menu.Item key={data.type} className={classes.side_item}>
                {data.icon}
                <div>{data.desc}</div>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header className={classes.header}>
          <Toolbar variant="dense" className={classes.bar}>
            <Link to={"/applet-admin"}>
              <Button className={classes.menuSpace}>
                <svg aria-hidden="true" className={`${classes.icon} icon`}>
                  <use xlinkHref="#icongengduo" />
                </svg>
                小程序管理
              </Button>
            </Link>
            <Button className={classes.menuSpace}>
              <svg aria-hidden="true" className={`${classes.icon} icon`}>
                <use xlinkHref="#iconmoban" />
              </svg>
              模板中心
            </Button>
            <Button className={classes.menuSpace}>
              <svg aria-hidden="true" className={`${classes.icon} icon`}>
                <use xlinkHref="#iconbangzhu" />
              </svg>
              帮助
            </Button>
            <div className={classes.grow} />
            <Button
              variant="contained"
              className={`${classes.menuSpace} ${classes.button}`}
            >
              <svg aria-hidden="true" className={`${classes.icon} icon`}>
                <use xlinkHref="#iconfabu" />
              </svg>
              发布
            </Button>
            <Button className={classes.menuSpace}>
              <svg aria-hidden="true" className={`${classes.icon} icon`}>
                <use xlinkHref="#iconyulan" />
              </svg>
              预览
            </Button>
            <Button className={classes.menuSpace}>
              <svg aria-hidden="true" className={`${classes.icon} icon`}>
                <use xlinkHref="#iconfuzhi" />
              </svg>
              保存
            </Button>
            <Divider type="vertical" className={classes.divider} />
            <Link to="/">
              <Button className={classes.quite}>
                <svg aria-hidden="true" className={`${classes.icon} icon`}>
                  <use xlinkHref="#icontuichu" />
                </svg>
                退出
              </Button>
            </Link>
          </Toolbar>
        </Header>
        <Layout className={classes.content}>
          <Sider width={272}>
            <SideRender type={side} />
          </Sider>
          <Content>
            <div className={classes.canvas} />
          </Content>
          <Sider width={336}>
            <EditRender />
          </Sider>
        </Layout>
      </Layout>
    </Fragment>
  );
});
