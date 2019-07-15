import React, { memo, useState } from "react";
import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Row, Col, Icon } from "antd";
import Tetris from "./svg-comp/Tetris";
import Column from "./svg-comp/Column";
import Coordinate from "./svg-comp/Coordinate";
import Building from "./svg-comp/Building";

const pageData = [
  {
    title: "阿里云盾",
    content: "提供 7X24 小时的金融级服务器安全服务",
    links: [
      <a key="0" href="https://ant.design">
        Web&nbsp;&nbsp;
        <Icon type="right" />
      </a>,
      <a key="1" href="https://mobile.ant.design">
        Mobile&nbsp;&nbsp;
        <Icon type="right" />
      </a>,
      <a key="2" href="https://pro.ant.design">
        Pro&nbsp;&nbsp;
        <Icon type="right" />
      </a>
    ],

    Bg: Column
  },
  {
    title: "精美模板",
    content: "公司专业设计团队为你预设计各类模板",
    links: (
      <a href="https://antv.alipay.com">
        查看详情&nbsp;&nbsp;
        <Icon type="right" />
      </a>
    ),
    Bg: Tetris
  },
  {
    title: "数据分析",
    content: "智能、自然、惊艳的海量数据分析",
    links: <a href={"/"}>敬请期待</a>,
    Bg: Coordinate
  },
  {
    title: "小程序制作",
    content: "蜗壳科技为您提供各大平台小程序拖拽便捷制作",
    links: (
      <a href="https://eggjs.org">
        查看详情&nbsp;&nbsp;
        <Icon type="right" />
      </a>
    ),
    full: true,
    Bg: Building
  }
];

export default memo((props: { isMobile: boolean }) => {
  const { isMobile } = props;

  const [hover, setHover] = useState(null);

  const onMouseEnter = (hover: any) => {
    setHover(hover);
  };

  const onMouseLeave = () => {
    setHover(null);
  };

  const children = pageData.map((item, i) => {
    const colProps = {
      md: item.full ? 24 : 8,
      xs: 24
    };
    return (
      <Col {...colProps} key={i.toString()} className="part2-item-wrapper">
        <div
          className={`part2-item${item.full ? " full" : ""}`}
          onMouseEnter={() => {
            onMouseEnter(item.title);
          }}
          onMouseLeave={onMouseLeave}
        >
          <div className="part2-item-bg">
            {item.Bg &&
              React.createElement(item.Bg, {
                hover: !isMobile && hover === item.title,
                isMobile
              })}
          </div>
          <div className="part2-item-desc">
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <p className="part2-item-links">{item.links}</p>
          </div>
        </div>
      </Col>
    );
  });

  return (
    <div className="page-wrapper part2">
      <div className="page">
        <h1>简单可靠的技术</h1>
        <i />
        <OverPack className="part2-content">
          <QueueAnim component={Row} key="queue" type="bottom" leaveReverse>
            {children}
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
});
