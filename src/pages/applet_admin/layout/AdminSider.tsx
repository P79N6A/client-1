import { css } from "@emotion/core";
import { Icon, Menu } from "antd";
import React, { Fragment, memo } from "react";
import Logo from "../../../components/Logo";

interface IProps {
  item: string; // 侧边默认选中值 默认：common
  change(itemName: string): void; // 更改侧边选中数值
}

/**
 * TODO: 帮助 样式待修复
 * 详情：
 * 当视窗高度过低时，帮助会覆盖 上面的元素
 */
const AdminSider = memo((props: IProps) => {
  const { item, change } = props;

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
        <Menu.Item css={styles} key={"form"}>
          <Icon type="profile" />
          <div>表单</div>
        </Menu.Item>
      </Menu>
    </Fragment>
  );
});

export default AdminSider;
