/** @jsx jsx  */
import React, { memo, Fragment } from "react";
import { jsx, css } from "@emotion/core";
import { Button, Table } from "antd";

export default memo(props => {
  const ButtonGroup = Button.Group;

  const columns = [
    {
      title: "商品",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "名称",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "状态",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "分类",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "供应商",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "日期",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "库存",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "编辑",
      key: "action",
      render: (text, record) => <span>操作</span>
    }
  ];

  const style = {
    button: css`
      margin-right: 10px;
    `,

    card: css`
      margin-top: 10px;
      padding: 24px;
      background: #fbfbfb;
      border: 1px solid #d9d9d9;
      border-radius: 6px;
    `,
    top: css`
      margin-top: 10px;
    `
  };

  return (
    <Fragment>
      <ButtonGroup css={style.button}>
        <Button htmlType={"button"} type="primary">
          新增供应商
        </Button>
      </ButtonGroup>
      <Table css={style.top} columns={columns} />
    </Fragment>
  );
});
