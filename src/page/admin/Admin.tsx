import { css } from "@emotion/core";
import { Icon, Layout, Menu } from "antd";
import React, { Fragment, memo, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../component/Logo";
import AdminAssets from "./AdminAssets";
import AdminChart from "./AdminChart";
import AdminCustomer from "./AdminCustomer";
import AdminOrder from "./AdminOrder";
import AdminShop from "./AdminShop";
import AdminStorage from "./AdminStorage";

const { Header, Sider } = Layout;

export default memo(() => {
  // 控制menu 组件的选择
  const [menu, setMenu] = useState("shop");
  const changeMenu = ({ key }: { key: string }) => {
    setMenu(key);
  };

  const styles = {
    // 一级侧边栏
    side: css`
      box-shadow: 0 8px 11px -5px rgba(0, 0, 0, 0.2),
        0px 17px 26px 2px rgba(0, 0, 0, 0.14),
        0px 6px 32px 5px rgba(0, 0, 0, 0.12);
      background: #273543;
    `,
    //  一级目录
    side_item: css`
      box-shadow: none;
      height: 60px !important;
      line-height: 0;
      text-align: center;
      padding: 0;
      & > i {
        width: 100%;
      },
      & > div {
        margin-top: -16px;
      },
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

    header_menu: css`
      border: none;
      & > li {
        border: none;
        line-height: 64px;
      }
    `,
    icon: css`
      margin-right: 8px;
    `
  };

  const uiList = {
    shop: <AdminShop />,
    storage: <AdminStorage />,
    order: <AdminOrder />,
    customer: <AdminCustomer />,
    chart: <AdminChart />,
    assets: <AdminAssets />
  };

  return (
    <Fragment>
      <Sider width={80} css={styles.side}>
        <Logo />
        <Menu theme={"dark"} selectedKeys={[`${menu}`]} onClick={changeMenu}>
          <Menu.Item css={styles.side_item} key={"shop"}>
            <Icon type="appstore" />
            <div>店铺</div>
          </Menu.Item>
          <Menu.Item css={styles.side_item} key={"storage"}>
            <Icon type="snippets" />
            <div>商品</div>
          </Menu.Item>
          <Menu.Item css={styles.side_item} key={"order"}>
            <Icon type="snippets" />
            <div>订单</div>
          </Menu.Item>
          <Menu.Item css={styles.side_item} key={"customer"}>
            <Icon type="snippets" />
            <div>客户</div>
          </Menu.Item>
          <Menu.Item css={styles.side_item} key={"chart"}>
            <Icon type="snippets" />
            <div>图表</div>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header css={styles.header}>
          <Menu
            mode="horizontal"
            css={styles.header_menu}
            style={{ float: "left" }}
          >
            <Menu.Item>
              <Link to={"/applet-admin"}>
                <Icon css={styles.icon} type="database" />
                小程序管理
              </Link>
            </Menu.Item>
            <Menu.Item>
              <Icon css={styles.icon} type="layout" />
              模板中心
            </Menu.Item>
            <Menu.Item>
              <Icon css={styles.icon} type="customer-service" />
              帮助
            </Menu.Item>
          </Menu>
          <Menu
            mode="horizontal"
            css={styles.header_menu}
            style={{ float: "right" }}
          >
            <Menu.Item>
              <Icon css={styles.icon} type="rocket" />
              发布
            </Menu.Item>
            <Menu.Item>
              <Icon css={styles.icon} type="eye" />
              预览
            </Menu.Item>
            <Menu.Item>
              <Icon css={styles.icon} type="save" />
              保存
            </Menu.Item>
            <Menu.Item>
              <Link to="/">
                <Icon css={styles.icon} type="export" />
                退出
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout css={styles.main}>{uiList[menu]}</Layout>
      </Layout>
    </Fragment>
  );
});
