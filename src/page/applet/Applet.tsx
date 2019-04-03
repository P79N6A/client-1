/**
 * @date 2019年04月03日10:23:16
 * @author 陈迎（antonin.chenying@gmail.com）
 * @description 页面：小程序制作
 */

/**
 * @description 第三方包引用
 */
import { css } from "@emotion/core";
import { Button, Toolbar } from "@material-ui/core";
import { Divider, Icon, Layout, Menu, Typography } from "antd";
import React, { Fragment, memo } from "react";
import { CirclePicker } from "react-color";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

/**
 * @description 项目文件引用
 */
import Logo from "../../component/Logo";
import { action } from "../../model/action";
import { IRedux } from "../../typing/redux";
import Canvas from "./Canvas";
import Edit from "./Edit";
import Side from "./Side";

/**
 *  @description 功能
 *  1. 布局样式 ✅
 *  2. 组件引用 ✅
 *  3. 数据请求
 *  4. 主题色 与 侧边项 在reducer 中变更 ✅
 */
const Applet = memo((props: IRedux) => {
  // props 结构
  const { applet, action } = props;

  // antd 组件解构
  const { Header, Content, Sider } = Layout;

  // 样式
  const styles = {
    button: css`
      margin-right: 8px !important;
      background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
      border-radius: 3px;
      box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
    `,
    canvas: css`
      margin-top: 100px;
    `,
    content: css`
      padding: 6px 16px;
    `,
    header: css`
      padding: 0;
      background: #fff;
      box-shadow: 0 8px 9px -5px rgba(0, 0, 0, 0.2),
        0px 15px 22px 2px rgba(0, 0, 0, 0.14),
        0px 6px 28px 5px rgba(0, 0, 0, 0.12);
      & > div {
        height: 64px;
        line-height: 64px;
        overflow: hidden;
        background: transparent;
      }
    `,
    icon: css`
      margin-right: 8px;
    `,
    side: css`
      position: relative;
      z-index: 1101;
      box-shadow: 0 8px 11px -5px rgba(0, 0, 0, 0.2),
        0px 17px 26px 2px rgba(0, 0, 0, 0.14),
        0px 6px 32px 5px rgba(0, 0, 0, 0.12);
      background: #273543;
    `,
    side_item: css`
      box-shadow: none;
      height: 60px !important;
      line-height: 0;
      text-align: center;
      padding: 0;

      & > i {
        width: 100%;
      }

      ,
      & > div {
        margin-top: -16px;
      }
    `
  };

  // side menu 数据记录，默认 text
  type SideItem = Array<{ type: string; icon: object; desc: string }>; // side 项目
  const item: SideItem = [
    {
      desc: "模块",
      icon: <Icon type="appstore" />,
      type: "model"
    },
    {
      desc: "控件",
      icon: <Icon type="tool" />,
      type: "plugin"
    },
    {
      desc: "页面",
      icon: <Icon type="snippets" />,
      type: "pages"
    }
  ]; // 侧边项 数据
  const changeSide = ({ key }: { key: string }) => {
    action({ type: "sideChange", payload: { data: key } });
  };

  // 主题色更改
  const changeTheme = (color: { hex: string }) => {
    action({ type: "themeChange", payload: { data: color.hex } });
  };
  return (
    <Fragment>
      <Sider width={80} css={styles.side}>
        <Logo />
        <Menu theme={"dark"} selectedKeys={[applet.side]} onClick={changeSide}>
          {item.map((data: SideItem[0]) => {
            return (
              <Menu.Item key={data.type} css={styles.side_item}>
                {data.icon}
                <div>{data.desc}</div>
              </Menu.Item>
            );
          })}
        </Menu>
      </Sider>
      <Layout>
        <Header css={styles.header}>
          <Toolbar variant="dense">
            <Link to={"/applet-admin"}>
              <Button>
                <Typography.Text>
                  <Icon css={styles.icon} type="database" />
                  小程序管理
                </Typography.Text>
              </Button>
            </Link>
            <Button>
              <Typography.Text>
                <Icon css={styles.icon} type="layout" />
                模板中心
              </Typography.Text>
            </Button>
            <Button>
              <Typography.Text>
                <Icon css={styles.icon} type="customer-service" />
                帮助
              </Typography.Text>
            </Button>
            <div style={{ flexGrow: 1 }} />
            <CirclePicker
              width={""}
              color={applet.theme}
              onChange={changeTheme}
              colors={[
                "#f44336",
                "#e91e63",
                "#9c27b0",
                "#673ab7",
                "#3f51b5",
                "#2196f3",
                "#cddc39",
                "#ffeb3b",
                "#ffc107"
              ]}
            />
            <div style={{ flexGrow: 1 }} />
            <Button variant="contained" css={styles.button}>
              <Typography.Text style={{ color: "white" }}>
                <Icon css={styles.icon} type="rocket" />
                发布
              </Typography.Text>
            </Button>
            <Button>
              <Typography.Text>
                <Icon css={styles.icon} type="eye" />
                预览
              </Typography.Text>
            </Button>
            <Button>
              <Typography.Text>
                <Icon css={styles.icon} type="save" />
                保存
              </Typography.Text>
            </Button>
            <Divider type="vertical" />
            <Link to="/">
              <Button>
                <Typography.Text>
                  <Icon css={styles.icon} type="export" />
                  退出
                </Typography.Text>
              </Button>
            </Link>
          </Toolbar>
        </Header>
        <Layout css={styles.content}>
          <Sider width={272}>
            <Side />
          </Sider>
          <Content css={styles.canvas}>
            <Canvas />
          </Content>
          <Sider width={336}>
            <Edit />
          </Sider>
        </Layout>
      </Layout>
    </Fragment>
  );
});

/**
 * @description 获取reducer中的数据及 action ,并导出函数
 */
const mapStateToProps = state => {
  return {
    applet: state.applet
  };
};
export default connect(
  mapStateToProps,
  { action }
)(Applet);
