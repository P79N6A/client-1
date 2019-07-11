import { Col, Row } from "antd";
import React, { memo } from "react";

interface $$Guide0 {
  component: {
    type: string;
    typeId: string;
    guideItem: Array<{ title: string; desc: string; img: string }>;
  };

  style: {
    bgColor: string;
    bgImg: string;
    marginTop: number;
    marginBottom: number;
    paddingTop: number;
    paddingBottom: number;
    height: number;
    paddingLeft: number;
    paddingRight: number;
  };
}
export const $$guide0: $$Guide0 = {
  component: {
    type: "guide",
    typeId: "guide0",
    guideItem: [
      {
        title: "标题",
        desc: "描述",
        img:
          "https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"
      },
      {
        title: "标题",
        desc: "描述",
        img:
          "https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"
      },
      {
        title: "标题",
        desc: "描述",
        img:
          "https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"
      },
      {
        title: "标题",
        desc: "描述",
        img:
          "https://gw.alipayobjects.com/zos/rmsportal/tXlLQhLvkEelMstLyHiN.svg"
      }
    ]
  },
  style: {
    marginTop: 0,
    marginBottom: 8,
    paddingTop: 10,
    paddingBottom: 10,
    height: 80,
    bgColor: "#fff",
    bgImg: "",
    paddingLeft: 40,
    paddingRight: 40
  }
};

interface IProps {
  theme: string;
  data: any;
}
export default memo((props: IProps) => {
  // 私有属性
  const { theme, data } = props;
  const { guideItem } = data;
  return (
    <Row gutter={16}>
      {guideItem.map((data: any, index: any) => {
        return (
          <Col
            span={6}
            style={{ textAlign: "center", color: theme }}
            key={index}
          >
            <img src={data.img} alt={"img"} width={30} height={30} />
            <div>{data.title}</div>
          </Col>
        );
      })}
    </Row>
  );
});
