import React, { Fragment, memo } from "react";
import { css } from "@emotion/core";
import { Layout } from "antd";

export default memo(() => {
  // antd 组件解构
  const { Header } = Layout;

  // 样式
  const styles = {
    // 导航栏
    header: css`
      padding: 0;
      background: #fff;
      overflow: hidden;
      height: 64px;
      border: none;
    `
  };

  return (
    <Fragment>
      <Header css={styles.header} />
    </Fragment>
  );
});
