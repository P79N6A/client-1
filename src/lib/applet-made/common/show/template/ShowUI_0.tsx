import { css } from "@emotion/core";
import { Carousel, Col, Row } from "antd";
import React, { memo } from "react";
import { IShow } from "../database";

interface IProps {
  theme: string;
  data: IShow;
}

export default memo((props: IProps) => {
  // 私有属性
  const { theme, data } = props;
  const { item } = data;

  return (
    <Carousel>
      {item.map((data, index) => {
        return <img src={data.img} alt={"img"} key={index} />;
      })}
    </Carousel>
  );
});
