import React, { memo } from "react";
import QueueAnim from "rc-queue-anim";
import BannerAnim from "rc-banner-anim";
import { Button } from "antd";
import "rc-banner-anim/assets/index.css";
import { banner } from "../data";
import IconFont from "../../../components/IconFont";
import Logo from "../../../components/Logo";

export default memo((props: { isMobile: boolean }) => {
  const { isMobile } = props;
  const { Element } = BannerAnim;
  const { BgElement } = Element;

  const bannerChildren = banner.map((item: any, i) => {
    const children = item.children.map(
      (child: any, ii: { toString: () => string | number | undefined }) => {
        const tag = child.tag === "button" ? "div" : child.tag || "p";
        const childrenToRender =
          child.tag === "button" ? (
            <Button>
              <a href={child.link}>{child.children}</a>
            </Button>
          ) : (
            child.children
          );
        return React.createElement(
          tag,
          {
            key: ii.toString(),
            className: child.className,
            style: child.style || {}
          },
          childrenToRender
        );
      }
    );
    return (
      <Element key={i.toString()}>
        <BgElement
          key="bg"
          className="banner-bg"
          style={{
            backgroundImage: `url(${isMobile ? item.imgMobile : item.img})`
          }}
        />
        <QueueAnim
          key="text"
          className={item.className}
          ease={["easeOutCubic", "easeInQuad"]}
          type={item.queueAnim || "bottom"}
        >
          {children}
        </QueueAnim>
      </Element>
    );
  });
  return (
    <div className="banner page-wrapper">
      <div className="page">
        <div className={"logo"} />
        <BannerAnim type="across" duration={550} ease="easeInOutQuint">
          {bannerChildren}
        </BannerAnim>
      </div>
    </div>
  );
});
