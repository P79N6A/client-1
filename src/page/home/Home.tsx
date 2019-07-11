import React, { Fragment, memo } from "react";
import { css } from "@emotion/core";
import { Button, Menu, Layout } from "antd";
import { RouteComponentProps, withRouter } from "react-router";

const Home = memo((props: RouteComponentProps) => {
  // antd 组件解构
  const { Header } = Layout;

  // 样式
  const styles = {
    // 导航栏
    header: css`
      padding: 0;
      background: #fff;
      overflow: hidden;
      height: 64px;
      border: none;
    `,
    // 左菜单
    menuLeft: css`
      float: left;
      border: none;
      font-size: 15px;
      & > li {
        font-size: 15px;
        border: none;
        line-height: 64px;
      }
    `,
    // 右菜单
    menuRight: css`
      float: right;
      border: none;
      font-size: 15px;
      & > li {
        font-size: 15px;
        border: none;
        line-height: 64px;
      }
    `,
    // 图标
    icon: css`
      margin-right: 8px;
    `,
    divider: css`
      margin-top: -12px;
    `
  };

  // 路由跳转
  const redirect = (route: string) => {
    props.history.push(route);
  };

  return (
    <Fragment>
      <Header css={styles.header}>
        <Menu mode="horizontal" css={styles.menuRight}>
          <Menu.Item onClick={() => redirect("/user/login")}>
            <Button type={"primary"}>登录 / 注册</Button>
          </Menu.Item>
        </Menu>
      </Header>
    </Fragment>
  );
});

export default withRouter(Home);
