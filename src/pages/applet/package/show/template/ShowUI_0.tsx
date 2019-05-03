import { Carousel } from "antd";
import React, { memo } from "react";
import { ShowFace } from "../../../types";

interface IProps {
  theme: string;
  data: ShowFace;
}

export const $$show0: ShowFace = {
  type: "show",
  typeId: 0,
  showItem: [
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
export const $$showStyle0 = {
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 10,
  paddingBottom: 10,
  height: 300,
  bgColor: "",
  bgImg: "",
  paddingLeft: 20,
  paddingRight: 20
};

export default memo((props: IProps) => {
  // 私有属性
  const { theme, data } = props;
  const { showItem } = data;

  return (
    <Carousel>
      {showItem.map((data, index) => {
        return <img src={data.img} alt={"img"} key={index} />;
      })}
    </Carousel>
  );
});
