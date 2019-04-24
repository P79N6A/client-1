import { css } from "@emotion/core";
import { Button, Icon, Menu } from "antd";
import React, { Fragment, memo } from "react";
import { Link } from "react-router-dom";
import { windowOpen } from "../../../tools/window-open";

const styles = {
  menu: css`
    border: none;
    font-size: 15px;
    & > li {
      font-size: 15px;
      border: none;
      line-height: 64px;
    }
  `,
  icon: css`
    margin-right: 8px;
    font-size: 15px;
  `
};

const AppletHeader = memo(() => {
  return (
    <Fragment>
      <Menu mode="horizontal" css={styles.menu} style={{ float: "left" }}>
        <Menu.Item>
          <Link to={"/applet-admin"}>
            <Icon css={styles.icon} type="database" />
            小程序管理
          </Link>
        </Menu.Item>
        <Menu.Item onClick={() => windowOpen("./help")}>
          <Icon css={styles.icon} type="customer-service" />
          帮助
        </Menu.Item>
      </Menu>
      <Menu mode="horizontal" css={styles.menu} style={{ float: "right" }}>
        <Menu.Item>
          <Link to={"/vip"}>
            <Button type={"primary"}>
              <svg
                css={styles.icon}
                style={{
                  width: 20,
                  height: 20,
                  fill: "currentColor",
                  overflow: "hidden",
                  marginBottom: -4
                }}
                aria-hidden="true"
              >
                <use xlinkHref="#icon-huiyuan" />
              </svg>
              开通会员
            </Button>
          </Link>
        </Menu.Item>
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
