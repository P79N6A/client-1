import React, { memo } from "react";
import { css } from "@emotion/core";
import { Button, Col, Layout, Menu, Row } from "antd";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

export default memo(() => {
  // antd 数据结构
  const { Header, Content } = Layout;

  // 样式
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
      font-size: 72px;
      line-height: 72px;
    `,
    desc: css`
      margin-bottom: 16px;
      color: rgba(0, 0, 0, 0.45);
      font-size: 20px;
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
      <Content>
        <div css={styles.layout}>
          <Row gutter={16}>
            <Col
              lg={12}
              md={12}
              sm={24}
              xs={24}
              style={{ textAlign: "center" }}
            >
              <svg aria-hidden="true" css={styles.svg}>
                <use xlinkHref="#icon-404" />
              </svg>
            </Col>
            <Col lg={11} md={11} sm={0} xs={0} offset={1}>
              <div css={styles.title}>403</div>
              <div css={styles.desc}>抱歉，你无权访问此页面！</div>
              <Link to={"/login"}>
                <Button type={"primary"}>立即登录</Button>
              </Link>
            </Col>
            <Col
              lg={0}
              md={0}
              sm={24}
              xs={24}
              style={{ textAlign: "center", marginLeft: -6 }}
            >
              <div css={styles.title}>403</div>
              <div css={styles.desc}>抱歉，你无权访问此页面！</div>
              <Link to={"/login"}>
                <Button type={"primary"}>立即登录</Button>
              </Link>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
});
