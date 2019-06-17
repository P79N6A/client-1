import React, { Fragment, memo, useState } from "react";
import { css } from "@emotion/core";
import { Icon, Layout, Menu, AutoComplete, Input } from "antd";
import IconFont from "../../components/IconFont";
import AdminShop from "./shop/AdminShop";

/**
 * @description 客户中台界面
 * TODO 针对性能，将页面进行提取，并异步加载
 */
export default memo(() => {
  // 侧边栏选项值存储
  const [item, setItem] = useState("shop");
  const changeItem = (itemName: string) => {
    setItem(itemName);
  }; // 修改侧边栏选项值

  // 根据选择项展示相应页面
  const itemPage: { [key: string]: object } = {
    shop: <AdminShop />
    // commodity: <Commodity />,
    // order: <Order />,
    // customer: <Customer />,
    // assets: <Assets />
  };

  const styles = {
    // 侧边栏
    side: css`
      box-shadow: 0 8px 11px -5px rgba(0, 0, 0, 0.2),
        0px 17px 26px 2px rgba(0, 0, 0, 0.14),
        0px 6px 32px 5px rgba(0, 0, 0, 0.12);
      background: #273543;
      min-height: 500px;
    `,
    // 侧边栏项目样式
    menuItem: css`
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
`,
    // logo 样式
    logo: css`
      height: 60px;
      text-align: center;
      font-size: 42px;
    `,
    // 侧边栏icon 样式
    icon: css`
      font-size: 16px;
    `,
    // 导航栏
    header: css`
      padding: 0;
      background: #fff;
      overflow: hidden;
      height: 64px;
      border: none;
    `,
    header_menuLeft: css`
      height: 64px;
      line-height: 64px;
      font-size: 20px;
      font-weight: bold;
      border-bottom: none !important;
      &:hover {
        border-bottom: none !important;
      }
    `,
    header_menuRight: css`
      float: right;
      height: 64px;
      line-height: 64px;
      border-bottom: none !important;
      &:hover {
        border-bottom: none !important;
      }
    `,
    // 主体内容
    main: css`
      height: 100%;
      padding: 18px;

      // 针对 ant layout 标签兼容性设置
      & > div {
        background: #fff;
        height: 100%;
        overflow: hidden;
        padding: 16px 0;
      }
      // 针对 ant layout 标签兼容性设置
      & > section {
        background: #fff;
        height: 100%;
        overflow: hidden;
        padding: 16px 0;
      }
    `,
    // 页脚
    footer: css`
      margin: 0 0 16px;
      padding: 0 16px;
      text-align: center;
    `,
    footer_font: css`
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
    `
  };

  return (
    <Fragment>
      <Layout.Sider width={80} css={styles.side}>
        <div css={styles.logo}>
          <IconFont type="icon-logo" />
        </div>
        <Menu
          theme={"dark"}
          selectedKeys={[item]}
          onClick={({ key }: { key: string }) => changeItem(key)}
        >
          <Menu.Item css={styles.menuItem} key={"dash"}>
            <Icon type="appstore" css={styles.icon} />
            <div>概览</div>
          </Menu.Item>
          <Menu.Item css={styles.menuItem} key={"shop"}>
            <Icon type="shop" css={styles.icon} />
            <div>店铺</div>
          </Menu.Item>
          <Menu.Item css={styles.menuItem} key={"commodity"}>
            <Icon type="shopping" css={styles.icon} />
            <div>商品</div>
          </Menu.Item>
          <Menu.Item css={styles.menuItem} key={"order"}>
            <Icon type="snippets" css={styles.icon} />
            <div>订单</div>
          </Menu.Item>
          <Menu.Item css={styles.menuItem} key={"customer"}>
            <Icon type="team" css={styles.icon} />
            <div>客户</div>
          </Menu.Item>
          <Menu.Item css={styles.menuItem} key={"assets"}>
            <Icon type="dollar" css={styles.icon} />
            <div>资产</div>
          </Menu.Item>
          <Menu.Item css={styles.menuItem} key={"marketing"}>
            <Icon type="fire" css={styles.icon} />
            <div>营销</div>
          </Menu.Item>
        </Menu>
      </Layout.Sider>
      <Layout>
        <Layout.Header css={styles.header}>
          <Menu mode="horizontal" selectable={false}>
            <Menu.Item css={styles.header_menuLeft}>蜗壳云商</Menu.Item>
            <Menu.Item css={styles.header_menuRight} key={"4"}>
              <Icon type="user" />
              个人中心
            </Menu.Item>
            <Menu.Item css={styles.header_menuRight} key={"3"}>
              <Icon type="mail" />
              站内信
            </Menu.Item>
            <Menu.Item css={styles.header_menuRight} key={"2"}>
              <Icon type="bell" />
              提醒
            </Menu.Item>
            <Menu.Item css={styles.header_menuRight} key={"1"}>
              <AutoComplete placeholder="搜索">
                <Input
                  suffix={
                    <Icon type="search" className="certain-category-icon" />
                  }
                />
              </AutoComplete>
            </Menu.Item>
          </Menu>
        </Layout.Header>
        <Layout.Content css={styles.main}>{itemPage[item]}</Layout.Content>
        <Layout.Footer css={styles.footer}>
          <div css={styles.footer_font}>
            Copyright <Icon type="copyright" /> {new Date().getFullYear()}{" "}
            蜗壳云商技术部出品
          </div>
        </Layout.Footer>
      </Layout>
    </Fragment>
  );
});
