import { Carousel } from "antd";
import React, { memo } from "react";

interface $$Show0 {
  component: {
    type: string;
    typeId: string;
    showItem: Array<{ title: string; desc: string; img: string }>;
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
export const $$show0: $$Show0 = {
  component: {
    type: "show",
    typeId: "show0",
    showItem: [
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
    height: 140,
    bgColor: "#fff",
    bgImg: "",
    paddingLeft: 20,
    paddingRight: 20
  }
};

interface IProps {
  theme: string;
  data: $$Show0["component"];
}
export default memo((props: IProps) => {
  // 私有属性
  const { data } = props;
  const { showItem } = data;

  return (
    <Carousel autoplay={true}>
      {showItem.map((data, index) => {
        return <img src={data.img} alt={"img"} key={index} height={140} />;
      })}
    </Carousel>
  );
});
