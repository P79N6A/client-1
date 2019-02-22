import * as React from "react";
import { Layout, Menu, Icon, Breadcrumb } from "antd";
import { css } from "@emotion/core";

export default React.memo(() => {
  const style = {
    menu: css`
      height: 64px;
      line-height: 64px;
      padding: 0 30px;
    `,
    right: css`
      float: right;
    `,
    title: css`
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      font-size: 20px;
      margin: 0;
    `,
    desc: css`
      margin: 0 0 16px 0;
      line-height: 14px;
    `
  };

  return (
    <React.Fragment>
      <Menu mode="horizontal" css={style.menu}>
        <Menu.Item key="mail" css={style.right}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="mails" css={style.right}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="mailss" css={style.right}>
          Navigation One
        </Menu.Item>
      </Menu>

      <div style={{ padding: "16px 32px 0" }}>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application Center</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Application List</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
        <h1 css={style.title}>表格查询</h1>
        <p css={style.desc}>
          表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。
        </p>
      </div>
    </React.Fragment>
  );
});
