import { css } from "@emotion/core";
import { Icon, Menu } from "antd";
import React, { Fragment, memo } from "react";
import Logo from "../../../components/Logo";

interface PropsFace {
  item: string | "common" | "plugin" | "marketing"; // 侧边默认选中值 默认：common
  change(itemName: string | "common" | "plugin" | "marketing"): void; // 更改侧边选中数值
}

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

const AppletSider = memo((props: PropsFace) => {
  const { item, change } = props;

  return (
    <Fragment>
      <Logo />
      <Menu
        theme={"dark"}
        selectedKeys={[item]}
        onClick={({ key }: { key: string }) => change(key)}
      >
        <Menu.Item css={styles} key={"common"}>
          <Icon type="appstore" />
          <div>基础</div>
        </Menu.Item>
        <Menu.Item css={styles} key={"plugin"}>
          <Icon type="snippets" />
          <div>插件</div>
        </Menu.Item>
        <Menu.Item css={styles} key={"marketing"}>
          <Icon type="snippets" />
          <div>营销</div>
        </Menu.Item>
      </Menu>
    </Fragment>
  );
});

export default AppletSider;
