import { css } from "@emotion/core";
import { Button, Icon, Menu } from "antd";
import React, { Fragment, memo } from "react";
import { Link } from "react-router-dom";
import { windowOpen } from "../../../tools/window-open";
import { connect } from "react-redux";
import { IRedux } from "../../../store/typing";
import { action } from "../../../store/action";

const AppletHeader = memo((props: IRedux) => {
  const { action } = props;

  // 样式
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
      font-size: 15px;
    `
  };

  // 展示模板
  const showTemplate = () => {
    action({ type: "changeEditType", payload: "template" });
    action({ type: "changeEditShow", payload: true });
  };

  return (
    <Fragment>
      <Menu
        mode="horizontal"
        css={styles.header_menu}
        style={{ float: "left", fontSize: 15 }}
      >
        <Menu.Item>
          <Link to={"/applet-admin"}>
            <Icon css={styles.icon} type="database" />
            小程序管理
          </Link>
        </Menu.Item>
        <Menu.Item onClick={showTemplate}>
          <Icon css={styles.icon} type="layout" />
          模板中心
        </Menu.Item>
        <Menu.Item onClick={() => windowOpen("./help")}>
          <Icon css={styles.icon} type="customer-service" />
          帮助
        </Menu.Item>
      </Menu>
      <Menu
        mode="horizontal"
        css={styles.header_menu}
        style={{ float: "right", fontSize: 15 }}
      >
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

export default connect(
  (state: IRedux) => {
    return {
      applet: state.applet
    };
  },
  { action }
)(AppletHeader);
