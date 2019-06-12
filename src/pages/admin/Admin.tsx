import React, { Fragment, memo, useState } from "react";
import { css } from "@emotion/core";
import { Layout } from "antd";
import AdminSider from "./layout/AdminSider";
import Commodity from "./components/Commodity";
import Shop from "./components/shop/Shop";
import Order from "./components/Order";
import Customer from "./components/Customer";
import Assets from "./components/Assets";

export default memo(() => {
  // 侧边栏选项值存储
  const [item, setItem] = useState("shop");

  // 修改侧边栏选项值
  const changeItem = (itemName: string) => {
    setItem(itemName);
  };

  // 根据选择项展示相应页面
  const itemPage: { [key: string]: object } = {
    commodity: <Commodity />,
    shop: <Shop />,
    order: <Order />,
    customer: <Customer />,
    assets: <Assets />
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
        <AdminSider item={item} change={changeItem} />
      </Layout.Sider>
      <Layout>
        <Layout.Header css={styles.header} />
        <Layout.Content>{itemPage[item]}</Layout.Content>
      </Layout>
    </Fragment>
  );
});
