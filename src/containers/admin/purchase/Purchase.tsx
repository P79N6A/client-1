/** @jsx jsx  */
import React, { memo, Fragment } from "react";
import { jsx, css } from "@emotion/core";
import { Button, Tabs, Card, Table } from "antd";

export default memo(props => {
  const TabPane = Tabs.TabPane;
  const ButtonGroup = Button.Group;

  const callback = key => {
    return "";
  };

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
    search: css`
      padding: 24px;
      background: #fbfbfb;
      border: 1px solid #d9d9d9;
      border-radius: 6px;
      margin-top: 10px;
    `,
    table: css`
      margin-top: 10px;
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
          新增采购订单
        </Button>
      </ButtonGroup>

      <Card css={style.card}>搜索表单</Card>

      <Tabs onChange={callback} type="card" css={style.top}>
        <TabPane tab="全部" key="1">
          <Table css={style.table} columns={columns} />
        </TabPane>
        <TabPane tab="待入库" key="2">
          <Table css={style.table} columns={columns} />
        </TabPane>
        <TabPane tab="已关闭" key="3">
          <Table css={style.table} columns={columns} />
        </TabPane>
        <TabPane tab="已完成" key="4">
          <Table css={style.table} columns={columns} />
        </TabPane>
      </Tabs>
    </Fragment>
  );
});
