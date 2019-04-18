import { css } from "@emotion/core";
import { Icon, Menu } from "antd";
import React, { Fragment, memo } from "react";
import { connect } from "react-redux";
import Logo from "../../../component/Logo";
import { action } from "../../../store/action";
import { IRedux } from "../../../store/typing";

const AppletSider = memo((props: IRedux) => {
  const { action, applet } = props;
  const styles = {
    side_item: css`
      box-shadow: none;
      height: 60px !important;
      line-height: 0;
      text-align: center;
      padding: 0;
      & > i {
        width: 100%;
      },
      & > div {
        margin-top: -16px;
      },
    `
  };

  // 侧边栏选项切换(redux)
  const changeSider = ({ key }: { key: number | string }) => {
    action({ type: "changeSider", payload: key });
  };

  return (
    <Fragment>
      <Logo />
      <Menu
        theme={"dark"}
        selectedKeys={[`${applet.sider}`]}
        onClick={changeSider}
      >
        <Menu.Item css={styles.side_item} key={0}>
          <Icon type="appstore" />
          <div>基础</div>
        </Menu.Item>
        <Menu.Item css={styles.side_item} key={1}>
          <Icon type="snippets" />
          <div>插件</div>
        </Menu.Item>
        <Menu.Item css={styles.side_item} key={2}>
          <Icon type="snippets" />
          <div>营销</div>
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
)(AppletSider);
