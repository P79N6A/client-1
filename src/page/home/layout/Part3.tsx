import "react-html5video/dist/styles.css";
import React, { memo } from "react";
import TweenOne from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import BannerAnim from "rc-banner-anim";
// @ts-ignore
import { DefaultPlayer as Video } from "react-html5video";
import { part3 } from "../data";

export default memo((props: { isMobile: boolean }) => {
  const { isMobile } = props;
  const { Element } = BannerAnim;
  const { BgElement } = Element;
  const children = part3.children.map((item, i) => (
    <Element key={i.toString()}>
      <BgElement className="banner" key="bg">
        <Video
          loop
          muted
          controls={["PlayPause", "Seek", "Time", "Volume", "Fullscreen"]}
          poster={isMobile ? item.imgMobile : item.img}
          key="video"
        >
          <source src={item.src} />
        </Video>
      </BgElement>
    </Element>
  ));
  const childrenToRender = (
    <TweenOne
      key="banner-wrapper"
      animation={{ type: "from", y: 30, opacity: 0 }}
    >
      <BannerAnim
        type="across"
        thumb={false}
        duration={550}
        ease="easeInOutQuint"
      >
        {children}
      </BannerAnim>
    </TweenOne>
  );
  return (
    <div className="page-wrapper part3">
      <div className="page">
        <h1>{part3.title}</h1>
        <i />
        {React.createElement(
          isMobile ? "div" : OverPack,
          { className: "banner-wrapper" },
          childrenToRender
        )}
      </div>
    </div>
  );
});
