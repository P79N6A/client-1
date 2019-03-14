import * as React from "react";
import { Carousel } from "antd-mobile";
import { ISwiper } from "./typing";

/**
 * 轮播图
 */
export default React.memo((props: ISwiper) => {
  const { item, autoPlay, width, height } = props;

  return (
    <Carousel
      autoplay={autoPlay}
      infinite
      style={{ height: height, width: width }}
    >
      {item.map((val, index) => {
        return (
          <img
            key={index}
            src={val.img}
            alt="carousel"
            style={{ height: height, width: width }}
          />
        );
      })}
    </Carousel>
  );
});
