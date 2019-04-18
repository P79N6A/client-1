import { css } from "@emotion/core";
import { Layout } from "antd";
import React, { Fragment, memo } from "react";

import AppletCanvas from "../component/applet/applet-made/AppletCanvas";
import AppletEdit from "../component/applet/applet-made/AppletEdit";
import AppletHeader from "../component/applet/applet-made/AppletHeader";
import AppletSelect from "../component/applet/applet-made/AppletSelect";
import AppletSider from "../component/applet/applet-made/AppletSider";

export default memo(() => {
  // antd 组件解构
  const { Header, Content, Sider } = Layout;

  // 样式
  const styles = {
    // 一级侧边栏
    side: css`
      box-shadow: 0 8px 11px -5px rgba(0, 0, 0, 0.2),
        0px 17px 26px 2px rgba(0, 0, 0, 0.14),
        0px 6px 32px 5px rgba(0, 0, 0, 0.12);
      background: #273543;
    `,
    //  二级侧边栏
    select: css`
      overflow: hidden;
      cursor: pointer;
      & > div > div {
        position: absolute;
        display: flex;
        will-change: transform, opacity;
      }
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
          <Sider width={296}>
            <AppletEdit />
          </Sider>
        </Layout>
      </Layout>
    </Fragment>
  );
});
