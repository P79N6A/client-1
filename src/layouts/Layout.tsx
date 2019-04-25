import React, { memo } from "react";
import { css } from "@emotion/core";
import { Layout as AntdLayout, LocaleProvider } from "antd";
import { withRouter } from "react-router-dom";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import PageRoute from "../routes/PageRoute";

const Layout = memo(props => {
  const styles = {
    // 页面根样式
    root: css`
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    `,
    // 加载状态样式
    loading: css`
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
    `
  };

  return (
    <LocaleProvider locale={zh_CN}>
      <AntdLayout css={styles.root}>
        <PageRoute />
      </AntdLayout>
    </LocaleProvider>
  );
});

export default withRouter(Layout);
