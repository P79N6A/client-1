import React, { memo, useState } from "react";
import { Icon, Layout, Menu } from "antd";
import { css } from "@emotion/core";
import { ShopAdmin } from "./ShopAdmin";

export default memo(() => {
  // 控制当前需要显示的帮助内容Key 类型
  const [contentType, setContentType] = useState("1");
  const { Content, Footer, Sider } = Layout;

  // content 内容列表
  const contentItem: { [id: string]: object } = {
    1: <ShopAdmin />
  };

  const styles = {
    content: css`
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
    desc: css`
      padding: 0 24px;
      min-height: 200px;
    `,
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
    <Layout style={{ height: "100%" }}>
      <Content css={styles.content}>
        <Layout>
          <Sider width={180}>
            <Menu
              style={{ height: "100%" }}
              mode="inline"
              selectedKeys={[contentType]}
              onClick={({ key }) => setContentType(key)}
            >
              <Menu.Item key="1">商铺管理</Menu.Item>
              <Menu.Item key="2" disabled={true}>
                商铺检测
              </Menu.Item>
            </Menu>
          </Sider>
          <Content css={styles.desc}>{contentItem[contentType]}</Content>
        </Layout>
      </Content>
      <Footer css={styles.footer}>
        <div css={styles.footer_font}>
          Copyright <Icon type="copyright" /> 2018 蚂蚁金服体验技术部出品
        </div>
      </Footer>
    </Layout>
  );
});
