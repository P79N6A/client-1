import React, { memo, useState } from "react";
import QueueAnim from "rc-queue-anim";
import { TweenOneGroup } from "rc-tween-one";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { Row, Col } from "antd";
import { part1 } from "../data";

const pointPos = [
  { x: -90, y: -20 },
  { x: 35, y: -25 },
  { x: -120, y: 125 },
  { x: -100, y: 165 },
  { x: 95, y: -5 },
  { x: 90, y: 160, opacity: 0.2 },
  { x: 110, y: 50 }
];

export default memo((props: { isMobile: boolean }) => {
  const { isMobile } = props;

  const [hoverNum, setHoverNum] = useState(null);

  const onMouseOver = (i: any) => {
    setHoverNum(i);
  };

  const onMouseOut = () => {
    setHoverNum(null);
  };

  const getEnter = (e: any) => {
    const i: any = e.index;
    const r = Math.random() * 2 - 1;
    const y = Math.random() * 10 + 5;
    const delay = Math.round(Math.random() * (i * 50));
    return [
      {
        delay,
        opacity: 0.4,
        ...pointPos[e.index],
        ease: "easeOutBack",
        duration: 300
      },
      {
        y: r > 0 ? `+=${y}` : `-=${y}`,
        duration: Math.random() * 1000 + 2000,
        yoyo: true,
        repeat: -1
      }
    ];
  };

  const children = part1.children.map((item, i) => {
    const isHover = hoverNum === i;
    const pointChild = [
      "point-ring left",
      "point-ring point-ring-0 right",
      "point-0",
      "point-2",
      "point-1",
      "point-3",
      "point-2"
    ].map((className, ii) => (
      <i
        className={className}
        key={ii.toString()}
        style={{
          background: item.color,
          borderColor: item.color
        }}
      />
    ));
    return (
      <Col md={8} xs={24} key={i.toString()} className="part1-item">
        <a
          className="part1-item-link"
          href={item.link}
          target="_blank"
          onMouseEnter={() => {
            onMouseOver(i);
          }}
          onMouseLeave={onMouseOut}
        >
          <TweenOneGroup
            enter={getEnter}
            leave={{
              x: 0,
              y: 30,
              opacity: 0,
              duration: 300,
              ease: "easeInBack"
            }}
            className="point-wrapper"
          >
            {(isHover || isMobile) && pointChild}
          </TweenOneGroup>
          <div
            className="part1-item-img"
            style={{ boxShadow: `0 16px 32px ${item.shadowColor}` }}
          >
            <img src={item.src} alt="img" />
          </div>
          <div className="part1-item-title">{item.title}</div>
          <p>{item.content}</p>
        </a>
      </Col>
    );
  });

  return (
    <div className="page-wrapper part1">
      <div className="page">
        <h1>{part1.title}</h1>
        <i />
        <OverPack>
          <QueueAnim key="queue" type="bottom" leaveReverse component={Row}>
            {children}
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
});
