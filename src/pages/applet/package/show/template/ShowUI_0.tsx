import { css } from "@emotion/core";
import { Carousel, Col, Row } from "antd";
import React, { memo } from "react";
import { ShowFace } from "../../../types";

interface IProps {
  theme: string;
  data: ShowFace;
}

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
