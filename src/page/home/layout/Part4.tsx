import React, { memo } from "react";
import { Row, Col } from "antd";
import QueueAnim from "rc-queue-anim";
import OverPack from "rc-scroll-anim/lib/ScrollOverPack";
import { part4 } from "../data";

export default memo(() => {
  const children = part4.children.map((img, i) => (
    <Col md={6} xs={24} key={i.toString()} className="part4-item">
      <img src={img} alt="img" />
    </Col>
  ));
  return (
    <div className="page-wrapper part4">
      <div className="page">
        <h1>{part4.title}</h1>
        <i />
        <OverPack playScale="0.3">
          <QueueAnim
            component={Row}
            className="part4-item-wrapper"
            key="item"
            leaveReverse
            type="bottom"
          >
            {children}
          </QueueAnim>
        </OverPack>
      </div>
    </div>
  );
});
