import { css } from "@emotion/core";
import { Col, Row } from "antd";
import React, { memo } from "react";
import { NavigationFace } from "../../../types";

interface IProps {
  theme: string;

  style: any;
}

export default memo((props: IProps) => {
  // 私有属性
  const { theme, style } = props;
  const {
    marginTop,
    marginBottom,
    paddingTop,
    paddingBottom,
    blockHeight,
    bgColor,
    bgImg,
    paddingLeft,
    paddingRight
  } = style;
  const styles = {
    block: css`
      white-space: pre-wrap;
      width: 100%;
      min-height: ${blockHeight}px;
      margin-top: ${marginTop}px;
      margin-bottom: ${marginBottom}px;
      padding-top: ${paddingTop}px;
      padding-bottom: ${paddingBottom}px;
      background-color: ${bgColor};
      ${bgImg ? `background:url(${bgImg})` : ""};
      padding-left: ${paddingLeft}px;
      padding-right: ${paddingRight}px;
    `
  };

  return (
    <div css={styles.block}>
      <Row>
        <Col span={6}>项目一</Col>
        <Col span={6}>项目一</Col>
        <Col span={6}>项目一</Col>
        <Col span={6}>项目一</Col>
      </Row>
    </div>
  );
});
