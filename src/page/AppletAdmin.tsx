import { css } from "@emotion/core";
import { Icon, Layout, Menu } from "antd";
import React, { Fragment, memo, useState } from "react";
import Logo from "../component/Logo";
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
  return (
    <Fragment>
      <Sider width={80} css={styles.side}>
        <Logo />
        <Menu theme={"dark"} selectedKeys={[`${menu}`]} onClick={changeMenu}>
          <Menu.Item css={styles.side_item} key={"shop"}>
            <Icon type="appstore" />
            <div>表单</div>
          </Menu.Item>
          <Menu.Item css={styles.side_item} key={"storage"}>
            <Icon type="snippets" />
            <div>文章</div>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header css={styles.header} />
        <Layout css={styles.main} />
      </Layout>
    </Fragment>
  );
});
