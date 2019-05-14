import React, { Fragment, memo, useState } from "react";
import { css } from "@emotion/core";
import { Icon, Menu, Button, Divider, Modal } from "antd";
import { RouteComponentProps, withRouter } from "react-router-dom";

const AppletHeader = memo((props: RouteComponentProps) => {
  // 模态框控制
  const [visible, setVisible] = useState(false);

  // 打开模态框，显示模板
  const showModal = () => {
    setVisible(true);
  };

  // 使用选中的模板，并关闭
  const handleOk = () => {
    setVisible(false);
  };

  // 关闭模态框
  const handleCancel = () => {
    setVisible(false);
  };

  // 路由跳转
  const redirect = (route: string) => {
    props.history.push(route);
  };

  const styles = {
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

  return (
    <Fragment>
      <Menu mode="horizontal" css={styles.menuLeft} selectedKeys={[""]}>
        <Menu.Item onClick={() => redirect("/applet-admin")}>
          <Icon css={styles.icon} type="appstore" />
          小程序管理
        </Menu.Item>
        <Menu.Item onClick={showModal}>
          <Icon css={styles.icon} type="database" />
          模版
        </Menu.Item>
      </Menu>
      <Menu mode="horizontal" css={styles.menuRight}>
        <Menu.Item onClick={() => redirect("/vip")}>
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
        <Menu.Item style={{ margin: 0, padding: 0 }}>
          <Divider type="vertical" css={styles.divider} />
        </Menu.Item>
        <Menu.Item onClick={() => redirect("/")}>
          <Icon css={styles.icon} type="export" />
          退出
        </Menu.Item>
      </Menu>
      <Modal
        title="模板"
        visible={visible}
        okText={"确定"}
        cancelText={"取消"}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        模板
      </Modal>
    </Fragment>
  );
});

export default withRouter(AppletHeader);
