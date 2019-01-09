import React, { memo, useState } from "react";
import { Icon, Layout, Breadcrumb } from "antd";
import { css, StyleSheet } from "aphrodite/no-important";
import HeaderLayout from "./HeaderLayout";
import SiderLayout from "./SiderLayout";
import Stock from "../../app/admin/stock/Stock";
import Supplier from "../../app/admin/supplier/Supplier";
import Purchase from "../../app/admin/purchase/Purchase";
import Distribution from "../../app/admin/distribution/Distribution";

const { Header, Sider } = Layout;

export default memo(() => {
  // 控制侧边栏的伸缩
  const [collapsed, setCollapsed] = useState(false);
  // 切换状态控制
  const toggle = (): void => {
    setCollapsed(!collapsed);
  };
  // 侧边栏断点处理
  const onBreakpoint = (broken): void => {
    broken ? setCollapsed(true) : setCollapsed(false);
  };
  // 样式
  const styles = StyleSheet.create({
    layout: {
      height: "100vh"
    },
    header: {
      background: "#fff",
      width: "100%",
      padding: "0 24px"
    },
    breadcrumb: {
      margin: "16px 24px "
    },
    main: {
      height: "calc(100vh - 68px)",
      overflowX: "hidden",
      overflowY: "auto"
    },
    content: {
      background: "#fff",
      padding: 24,
      margin: "0 24px",
      height: "auto",
      minHeight: "calc(100vh - 187px)"
    },
    footer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f0f2f5",
      color: "rgba(0, 0, 0, 0.65)",
      fontSize: "14px",
      padding: 24
    }
  });

  return (
    <Layout className={css(styles.layout)}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        trigger={null}
        collapsible={true}
        collapsed={collapsed}
        onBreakpoint={onBreakpoint}
      >
        <SiderLayout />
      </Sider>
      <Layout>
        <Header className={css(styles.header)}>
          <HeaderLayout toggle={toggle} collapsed={collapsed} />
        </Header>
        <Breadcrumb className={css(styles.breadcrumb)}>
          <Breadcrumb.Item>
            <Icon type="home" />
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className={css(styles.main)}>
          <div className={css(styles.content)}>
            {/*<Stock/>*/}
            {/*<Supplier/>*/}
            {/*<Purchase />*/}
            {/*<Distribution />*/}
          </div>
          <div className={css(styles.footer)}>
            Copyright 2018 蚂蚁金服体验技术部出品
          </div>
        </div>
      </Layout>
    </Layout>
  );
});
