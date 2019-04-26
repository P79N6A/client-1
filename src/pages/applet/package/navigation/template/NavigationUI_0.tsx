import { Col, Row } from "antd";
import React, { memo } from "react";

interface IProps {
  theme: string;
  data: any;
}

export default memo((props: IProps) => {
  // 私有属性
  const { theme, data } = props;

  return (
    <div>
      <Row>
        <Col span={6}>项目一</Col>
        <Col span={6}>项目一</Col>
        <Col span={6}>项目一</Col>
        <Col span={6}>项目一</Col>
      </Row>
    </div>
  );
});
