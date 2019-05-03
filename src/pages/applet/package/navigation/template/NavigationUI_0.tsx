import { Col, Row } from "antd";
import React, { memo } from "react";
import { NavigationFace } from "../../../types";

interface IProps {
  theme: string;
  data: any;
}
export const $$navigation0: NavigationFace = {
  type: "navigation",
  typeId: 0,
  item: [
    {
      title: "标题",
      desc: "描述",
      img: "https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"
    },
    {
      title: "标题",
      desc: "描述",
      img: "https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"
    },
    {
      title: "标题",
      desc: "描述",
      img: "https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"
    }
  ]
};
export const $$navigationStyle0 = {
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 10,
  paddingBottom: 10,
  height: 300,
  bgColor: "",
  bgImg: "",
  paddingLeft: 40,
  paddingRight: 40
};

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
