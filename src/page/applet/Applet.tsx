import { css } from "@emotion/core";
import { Layout } from "antd";
import React, { Fragment, memo, useState } from "react";
import AppletHeader from "./layout/AppletHeader";
import AppletSider from "./layout/AppletSider";
import AppletSelect from "./layout/AppletSelect";
import AppletCanvas from "./layout/AppletCanvas";
import AppletEdit from "./layout/AppletEdit";

export default memo(() => {
  // 侧边栏选项值存储
  const [item, setItem] = useState("common");

  // 修改侧边栏选项值
  const changeItem = (itemName: string) => {
    setItem(itemName);
  };

  const styles = {
    // 一级侧边栏
    side: css`
      box-shadow: 0 8px 11px -5px rgba(0, 0, 0, 0.2),
        0px 17px 26px 2px rgba(0, 0, 0, 0.14),
        0px 6px 32px 5px rgba(0, 0, 0, 0.12);
      background: #273543;
      min-height: 500px;
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
      padding: 8px;
    `
  };

  return (
    <Fragment>
      <Layout.Sider width={80} css={styles.side}>
        <AppletSider item={item} change={changeItem} />
      </Layout.Sider>
      <Layout>
        <Layout.Header css={styles.header}>
          <AppletHeader />
        </Layout.Header>
        <Layout css={styles.main}>
          <Layout.Sider width={272}>
            <AppletSelect sideType={item} />
          </Layout.Sider>
          <Layout.Content>
            <AppletCanvas />
          </Layout.Content>
          <Layout.Sider width={294}>
            <AppletEdit />
            {/*<AppletMadeEdit />*/}
          </Layout.Sider>
        </Layout>
      </Layout>
    </Fragment>
  );
});
