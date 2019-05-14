import { css } from "@emotion/core";
import { Icon, Menu } from "antd";
import React, { Fragment, memo } from "react";
import Logo from "../../../components/Logo";
import { windowOpen } from "../../../tools/window-open";

interface IProps {
  item: string | "common" | "plugin" | "marketing"; // 侧边默认选中值 默认：common
  change(itemName: string | "common" | "plugin" | "marketing"): void; // 更改侧边选中数值
}

/**
 * TODO: 帮助 样式待修复
 * 详情：
 * 当视窗高度过低时，帮助会覆盖 上面的元素
 */
const AppletSider = memo((props: IProps) => {
  const { item, change } = props;

  // 路由跳转
  const redirect = (route: string) => {
    windowOpen(route);
  };

  const styles = css`
      box-shadow: none;
      height: 60px !important;
      line-height: 0;
      text-align: center;
      padding: 0;
      & > i {
        width: 100%;
        font-size: 15px;
      },
      & > div {
        margin-top: -16px;
        font-size: 15px;
        
      },
    `;

  return (
    <Fragment>
      <Logo />
      <Menu
        style={{
          marginBottom: "calc(100vh - 342px)",
          position: "relative",
          zIndex: 2
        }}
        theme={"dark"}
        selectedKeys={[item]}
        onClick={({ key }: { key: string }) => change(key)}
      >
        <Menu.Item css={styles} key={"common"}>
          <Icon type="profile" />
          <div>基础</div>
        </Menu.Item>
        <Menu.Item css={styles} key={"plugin"}>
          <Icon type="api" />
          <div>插件</div>
        </Menu.Item>
        <Menu.Item css={styles} key={"marketing"}>
          <Icon type="fire" />
          <div>营销</div>
        </Menu.Item>
      </Menu>
      <Menu theme={"dark"} selectedKeys={[""]}>
        <Menu.Item css={styles} onClick={() => redirect("/help")}>
          <Icon type="question-circle" />
          <div>帮助</div>
        </Menu.Item>
      </Menu>
    </Fragment>
  );
});

export default AppletSider;
