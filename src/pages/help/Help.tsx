import React, { Fragment, memo, useState } from "react";
import { Icon, Layout, Menu } from "antd";
import { css } from "@emotion/core";
import AppletMadeHelp from "./AppletMadeHelp";

export default memo(() => {
  // 控制当前需要显示的帮助内容Key 类型
  const [contentType, setContentType] = useState("applet");
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;

  const styles = {
    header: css`
      padding: 0;
      background: #fff;
      overflow: hidden;
      height: 64px;
      border: none;
    `,
    content: css`
      padding: 25px 50px;
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

  // 根据指定类型展示相应帮助内容
  const content: { [name: string]: object } = {
    applet: <AppletMadeHelp />
  };

  return (
    <Fragment>
      <Header css={styles.header} />
      <Content css={styles.content}>
        <Layout>
          <Sider width={180}>
            <Menu
              style={{ height: "100%" }}
              mode="inline"
              selectedKeys={[contentType]}
              onClick={({ key }) => setContentType(key)}
            >
              <SubMenu key="sub1" title={"商城制作"}>
                <Menu.Item key="bind">小程序绑定</Menu.Item>
                <Menu.Item key="applet">小程序制作</Menu.Item>
              </SubMenu>
              <Menu.Item key="1">关于我们</Menu.Item>
              <Menu.Item key="2">隐私</Menu.Item>
              <Menu.Item key="3">条框</Menu.Item>
            </Menu>
          </Sider>
          <Content css={styles.desc}>{content[contentType]}</Content>
        </Layout>
      </Content>
      <Footer css={styles.footer}>
        <div css={styles.footer_font}>
          Copyright <Icon type="copyright" /> {new Date().getFullYear()}{" "}
          蜗壳云商技术部出品
        </div>
      </Footer>
    </Fragment>
  );
});
