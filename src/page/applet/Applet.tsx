import { css } from "@emotion/core";
import { Layout } from "antd";
import React, { Fragment, memo } from "react";
import AppletCanvas from "./AppletCanvas";
import AppletEdit from "./AppletEdit";
import AppletHeader from "./AppletHeader";
import AppletSelect from "./AppletSelect";
import AppletSider from "./AppletSider";

export default memo(() => {
  const { Header, Content, Sider } = Layout;
  const styles = {
    // 一级侧边栏
    side: css`
      box-shadow: 0 8px 11px -5px rgba(0, 0, 0, 0.2),
        0px 17px 26px 2px rgba(0, 0, 0, 0.14),
        0px 6px 32px 5px rgba(0, 0, 0, 0.12);
      background: #273543;
    `,
    // 导航栏
    header: css`
      padding: 0;
      background: #fff;
      overflow: hidden;
      height: 64px;
      border: none;
    `,
    // 主体内容
    main: css`
      padding: 4px 8px;
    `,
    //  侧边选择
    select: css`
      overflow: hidden;
      cursor: pointer;
      & > div > div {
        position: absolute;
        display: flex;
        will-change: transform, opacity;
      }
    `
  };
  return (
    <Fragment>
      <Sider width={80} css={styles.side}>
        <AppletSider />
      </Sider>
      <Layout>
        <Header css={styles.header}>
          <AppletHeader />
        </Header>
        <Layout css={styles.main}>
          <Sider width={272} css={styles.select}>
            <AppletSelect />
          </Sider>
          <Content>
            <AppletCanvas />
          </Content>
          <Sider width={294}>
            <AppletEdit />
          </Sider>
        </Layout>
      </Layout>
    </Fragment>
  );
});
