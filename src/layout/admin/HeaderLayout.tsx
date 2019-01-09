import React, { memo, useState, Fragment } from "react";
import { Layout, Menu, Icon, Avatar, Dropdown } from "antd";
import { css, StyleSheet } from "aphrodite/no-important";

interface IProps {
  collapsed: boolean;

  toggle(): void;
}

export default memo((props: IProps) => {
  const { toggle, collapsed } = props;
  // 头像隐藏菜单
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          菜单一
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          菜单二
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          菜单三
        </a>
      </Menu.Item>
    </Menu>
  );
  // 样式
  const styles = StyleSheet.create({
    menu: {
      lineHeight: "62px",
      textAlign: "right"
    },
    trigger: {
      fontSize: 18,
      lineHeight: "66px",
      cursor: "pointer",
      transition: "color .3s",
      float: "left",
      ":hover": {
        color: "#1890ff"
      }
    }
  });

  return (
    <Fragment>
      <Icon
        className={css(styles.trigger)}
        type={collapsed ? "menu-unfold" : "menu-fold"}
        onClick={toggle}
      />
      <Menu mode="horizontal" className={css(styles.menu)}>
        <Menu.Item key="help">
          <Icon type="question-circle" />
          帮助
        </Menu.Item>
        <Menu.Item key="msg">
          <Icon type="bell" />
          信息
        </Menu.Item>
        <Menu.Item key="user">
          <Dropdown overlay={menu}>
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Fragment>
  );
});
