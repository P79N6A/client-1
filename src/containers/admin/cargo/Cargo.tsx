/** @jsx jsx  */
import React, { memo, useState, Fragment } from "react";
import { jsx, css } from "@emotion/core";
import { Card, Breadcrumb, Icon } from "antd";
import CargoStock from "./CargoStock";
import CargoAdd from "./CargoAdd";
import CargoReport from "./CargoReport";
import CargoSort from "./CargoSort";

/**
 * @description 商品管理页
 */
export default memo(() => {
  // 选择分类
  const [type, setType] = useState("stock");
  // 选择分类
  const choose = (name: string) => {
    setType(name);
  };
  // 样式
  const style = {
    top: css`
      margin-top: 14px;
      background: white;
      height: 100%;
      border: 1px solid #1890ff;
    `,
    card: css`
      width: 25%;
      line-height: 3px;
      text-align: center;
      height: 30px;
    `,
    button: css`
      width: calc(100vh - 244px);
    `
  };
  // 对应模块
  const components = {
    stock: <CargoStock />,
    add: <CargoAdd />,
    report: <CargoReport />,
    sort: <CargoSort />
  };

  return (
    <Fragment>
      <Card bodyStyle={{ padding: 0 }}>
        <span onClick={() => choose("stock")}>
          <Card.Grid
            css={style.card}
            style={{
              color: `${type === "stock" ? "#fff" : ""}`,
              backgroundColor: `${type === "stock" ? "#1890ff" : ""}`
            }}
          >
            商品库存
          </Card.Grid>
        </span>
        <span onClick={() => choose("add")}>
          <Card.Grid
            css={style.card}
            style={{
              color: `${type === "add" ? "#fff" : ""}`,
              backgroundColor: `${type === "add" ? "#1890ff" : ""}`
            }}
          >
            新增商品
          </Card.Grid>
        </span>
        <span onClick={() => choose("sort")}>
          <Card.Grid
            css={style.card}
            style={{
              color: `${type === "sort" ? "#fff" : ""}`,
              backgroundColor: `${type === "sort" ? "#1890ff" : ""}`
            }}
          >
            商品分类
          </Card.Grid>
        </span>
        <span onClick={() => choose("report")}>
          <Card.Grid
            css={style.card}
            style={{
              color: `${type === "report" ? "#fff" : ""}`,
              backgroundColor: `${type === "report" ? "#1890ff" : ""}`
            }}
          >
            导出报表
          </Card.Grid>
        </span>
      </Card>

      <div css={style.top}>{components[type]}</div>
    </Fragment>
  );
});
