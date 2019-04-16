import { css } from "@emotion/core";
import { Icon, Menu } from "antd";
import React, { Fragment, memo } from "react";
import { Link } from "react-router-dom";

const AppletHeader = memo(() => {
  const styles = {
    header: css`
      padding: 0;
      background: #fff;
      overflow: hidden;
      height: 64px;
      border: none;
    `,
    header_menu: css`
      border: none;
      & > li {
        border: none;
        line-height: 64px;
      }
    `,
    icon: css`
      margin-right: 8px;
    `
  };
  return (
    <Fragment>
      <Menu
        mode="horizontal"
        css={styles.header_menu}
        style={{ float: "left" }}
      >
        <Menu.Item>
          <Link to={"/applet-admin"}>
            <Icon css={styles.icon} type="database" />
            小程序管理
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Icon css={styles.icon} type="layout" />
          模板中心
        </Menu.Item>
        <Menu.Item>
          <Icon css={styles.icon} type="customer-service" />
          帮助
        </Menu.Item>
      </Menu>
      <Menu
        mode="horizontal"
        css={styles.header_menu}
        style={{ float: "right" }}
      >
        <Menu.Item>
          <Icon css={styles.icon} type="rocket" />
          发布
        </Menu.Item>
        <Menu.Item>
          <Icon css={styles.icon} type="eye" />
          预览
        </Menu.Item>
        <Menu.Item>
          <Icon css={styles.icon} type="save" />
          保存
        </Menu.Item>
        <Menu.Item>
          <Link to="/">
            <Icon css={styles.icon} type="export" />
            退出
          </Link>
        </Menu.Item>
      </Menu>
    </Fragment>
  );
});

export default AppletHeader;
