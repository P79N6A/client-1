import React, { memo } from "react";
import { css } from "@emotion/core";
import { Col, Layout, Menu, Row } from "antd";
import Logo from "../../components/Logo";

export default memo(() => {
  const { Header, Content } = Layout;

  const styles = {
    layout: css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      margin-top: 16%;
      align-content: center;
    `,
    title: css`
      margin-bottom: 24px;
      color: #434e59;
      font-weight: 600;
      font-size: 40px;
      line-height: 50px;
    `,
    desc: css`
      margin-bottom: 16px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 16px;
      line-height: 28px;
    `,
    svg: css`
      width: 400px;
      font-size: 100px;
    `,
    header: css`
      padding: 0;
      & > ul {
        height: 64px;
        line-height: 64px;
      }
    `
  };

  return (
    <Layout>
      <Header css={styles.header}>
        <Menu mode="horizontal">
          <Logo />
        </Menu>
      </Header>
      <Content css={styles.layout}>
        <Row gutter={16}>
          <Col lg={12} md={12} sm={24} xs={24} style={{ textAlign: "center" }}>
            <svg aria-hidden="true" css={styles.svg}>
              <use xlinkHref="#icon-404" />
            </svg>
          </Col>
          {/*PC 端*/}
          <Col lg={11} md={11} sm={0} xs={0} offset={1}>
            <div css={styles.title}>网络连接异常</div>
            <div css={styles.desc}>
              <p>请试试以下办法：</p>
              <p>1. 检查网线、调制解调器和路由器</p>
              <p>2. 重新连接到 Wi-Fi 网络</p>
            </div>
          </Col>
          {/*移动端*/}
          <Col
            lg={0}
            md={0}
            sm={24}
            xs={24}
            style={{ textAlign: "center", marginLeft: -6 }}
          >
            <div css={styles.title}>网络连接异常</div>
            <div css={styles.desc}>
              <p>请试试以下办法：</p>
              <p>1. 检查网线、调制解调器和路由器</p>
              <p>2. 重新连接到 Wi-Fi 网络</p>
            </div>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
});
