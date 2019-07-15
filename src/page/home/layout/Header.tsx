import React, { memo } from "react";
import { Row, Col, Tooltip } from "antd";
import { header } from "../data";

export default memo(() => {
  return (
    <header>
      <Row className={"nav"}>
        {header.map((item: any, i: any) => {
          const content = item.children.map(
            (
              child: {
                img: string | undefined;
                title: React.ReactNode;
                desc: React.ReactNode;
              },
              ii: { toString: () => string | number | undefined }
            ) => (
              <a key={ii.toString()} className="tip-block" href={"/"}>
                <span className="tip-img">
                  <img src={child.img} alt="img" />
                </span>
                <div className="tip-content">
                  {child.title}
                  <div>{child.desc}</div>
                </div>
              </a>
            )
          );
          return (
            <Col key={i.toString()} span={6}>
              <Tooltip
                title={content}
                placement="bottom"
                overlayClassName="header-tip-wrap"
              >
                <span className="nav-title">{item.title}</span>
              </Tooltip>
            </Col>
          );
        })}
      </Row>
    </header>
  );
});
